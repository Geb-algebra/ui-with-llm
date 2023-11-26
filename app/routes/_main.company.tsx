import { Outlet } from '@remix-run/react';
import PageContainer from '~/components/PageContainer.tsx';
import PageTitle from '~/components/PageTitle.tsx';

export default function Page() {
  return (
    <PageContainer>
      <PageTitle>会社情報</PageTitle>
      <Outlet />
    </PageContainer>
  );
}
