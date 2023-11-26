import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';

export async function loader({ request }: LoaderFunctionArgs) {
  return json({});
}

export async function action({ request }: ActionFunctionArgs) {}

export default function Page() {
  return (
    <>
      <div className="py-32">
        <p className="font-serif font-bold text-primary text-6xl px-16 py-4">距離をゼロへ、</p>
        <p className="font-serif font-bold text-primary text-6xl px-16 py-4">可能性を無限大へ。</p>
        <p className="pl-32 text-primary text-xl py-4">
          Velocureは瞬時に世界を繋ぐ革新的なテレポーテーション技術を提供。あなたの日常に無限の可能性をもたらします。
        </p>
      </div>
    </>
  );
}
