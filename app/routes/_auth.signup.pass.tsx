import {
  json,
  type DataFunctionArgs,
  type LoaderFunctionArgs,
  type MetaFunction,
  redirect,
} from '@remix-run/node';
import { Form, useActionData, useLoaderData } from '@remix-run/react';
import AuthFormInput from '~/components/AuthFormInput.tsx';
import invariant from 'tiny-invariant';

import { WEBAUTHN_RP_ID, WEBAUTHN_RP_NAME, authenticator } from '~/services/auth.server.ts';
import AuthContainer from '~/components/AuthContainer.tsx';
import AuthButton from '~/components/AuthButton.tsx';
import AuthErrorMessage from '~/components/AuthErrorMessage.tsx';
import { generateRegistrationOptions } from '@simplewebauthn/server';
import { handleFormSubmit } from '~/services/webauthn.ts';
import { getSession, sessionStorage } from '~/services/session.server.ts';
import { createId } from '@paralleldrive/cuid2';
import { getRequiredStringFromFormData } from '~/utils.ts';
import PasskeyHero from '~/components/PasskeyHero.tsx';

export async function loader({ request }: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(request, { successRedirect: '/' });

  const session = await getSession(request);
  const username = session.get('username');
  if (!username) throw redirect('/signup');
  invariant(typeof username === 'string', 'username must be a string');

  const userId = createId();

  const options = await generateRegistrationOptions({
    rpName: WEBAUTHN_RP_NAME,
    rpID: WEBAUTHN_RP_ID,
    userID: userId,
    userName: username,
    timeout: 60000,
    attestationType: 'none',
    excludeCredentials: [],
    authenticatorSelection: {
      residentKey: 'required',
      userVerification: 'preferred',
    },
  });
  session.set('challenge', options.challenge);
  return json(options, {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session),
      'Cache-Control': 'no-store',
    },
  });
}

export async function action({ request }: DataFunctionArgs) {
  const cloneData = await request.clone().formData();
  const authMethod = getRequiredStringFromFormData(cloneData, 'auth-method');

  try {
    await authenticator.authenticate(authMethod, request, {
      successRedirect: '/',
    });
  } catch (error) {
    if (error instanceof Response && error.status >= 400) {
      return { error: (await error.json()) as { message: string } };
    }
    throw error;
  }
  return null;
}

export const meta: MetaFunction = () => {
  return [{ title: 'Sign Up' }];
};

export default function LoginPage() {
  const options = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <div className="flex flex-col gap-6">
      <AuthContainer>
        <AuthFormInput
          name="username"
          label="Username"
          id="username"
          type="text"
          disabled={true}
          value={options.user.name}
        />
      </AuthContainer>
      <AuthErrorMessage message={actionData?.error.message} />
      <AuthContainer>
        <Form method="post" onSubmit={handleFormSubmit(options)}>
          <input type="hidden" name="user-id" id="user-id" value={options.user.id} />
          <input type="hidden" name="username" id="username" value={options.user.name} />
          <input type="hidden" name="auth-method" id="auth-method" value="webauthn" />
          <AuthButton type="submit" value="registration">
            Sign Up with Passkey
          </AuthButton>
          <PasskeyHero className="mt-6" />
        </Form>
        <p className="h-6 text-center">or</p>
        <Form method="post" className="flex flex-col gap-6">
          <input type="hidden" name="user-id" id="user-id" value={options.user.id} />
          <input type="hidden" name="username" id="username" value={options.user.name} />
          <input type="hidden" name="auth-method" id="auth-method" value="user-pass" />
          <input type="hidden" name="type" id="type" value="registration" />
          <AuthFormInput name="password" label="Password" id="password" type="password" />
          <AuthButton type="submit">Sign Up with Password</AuthButton>
        </Form>
      </AuthContainer>
    </div>
  );
}
