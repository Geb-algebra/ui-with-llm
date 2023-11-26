import { type MetaFunction, json, type LoaderFunctionArgs } from '@remix-run/node';
import { Link, Outlet } from '@remix-run/react';
import logo from '../assets/logo.png';

export async function loader({ request }: LoaderFunctionArgs) {
  return json({});
}

export const meta: MetaFunction = () => {
  return [{ title: 'Velocure' }];
};

export default function Index() {
  return (
    <>
      <div className="w-full h-screen">
        <nav className="fixed w-full h-16 flex justify-between items-center bg-white border-b border-gray-300">
          <Link to="/" className="flex px-6 items-center h-16 gap-2">
            <img src={logo} alt="" width={48} height={48} />
            <h1 className="text-2xl text-primary font-serif font-bold">Velocure</h1>
          </Link>
          <div className="h-16 px-6 flex items-center gap-6">
            <Link to="/service">サービス</Link>
            <Link to="/case">実績</Link>
            <Link to="/news">ニュース</Link>
            <Link to="/company">会社情報</Link>
            <Link to="/ir">IR情報</Link>
            <Link to="/recruit">採用情報</Link>
            <Link to="/contact">お問い合わせ</Link>
          </div>
        </nav>
        <main className="pt-16">
          <Outlet />
        </main>
        <footer className="w-full px-6 h-16 flex items-center gap-6 bg-primary text-white">
          <h1 className="text-2xl font-serif font-bold">Velocure</h1>
          <Link to="/service">サービス</Link>
          <Link to="/case">実績</Link>
          <Link to="/news">ニュース</Link>
          <Link to="/company">会社情報</Link>
          <Link to="/ir">IR情報</Link>
          <Link to="/recruit">採用情報</Link>
          <Link to="/contact">お問い合わせ</Link>
        </footer>
      </div>
    </>
  );
}
