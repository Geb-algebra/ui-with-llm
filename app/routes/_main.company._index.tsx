import { Link } from '@remix-run/react';
import IndexPageItem from '~/components/IndexPageItem.tsx';

export default function Page() {
  return (
    <>
      <Link to="summary">
        <IndexPageItem name="会社概要" />
      </Link>
      <Link to="mission">
        <IndexPageItem name="企業理念" />
      </Link>
      <Link to="message">
        <IndexPageItem name="代表メッセージ" />
      </Link>
    </>
  );
}
