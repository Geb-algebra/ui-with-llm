import { Link } from '@remix-run/react';
import IndexPageItem from '~/components/IndexPageItem.tsx';

export default function Page() {
  return (
    <>
      <Link to="new-graduates">
        <IndexPageItem
          name="新卒採用"
          abstract="革新的なテレポーテーション技術を一緒に創り上げる、次世代の才能を募集しています。"
        />
      </Link>
      <Link to="career">
        <IndexPageItem
          name="中途採用"
          abstract="経験豊富なプロフェッショナルを求めています。テレポーテーションの未来を共に創造しましょう。"
        />
      </Link>
    </>
  );
}
