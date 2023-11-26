import { Link } from '@remix-run/react';
import ListItem from '~/components/ListItem.tsx';

export default function Page() {
  return (
    <>
      <Link to="5">
        <ListItem
          name="宇宙探査の新プロジェクト発表"
          abstract="Velocureが新しい宇宙探査プロジェクトを発表。未踏の領域へのテレポーテーション技術の応用を目指します。"
        />
      </Link>
      <Link to="4">
        <ListItem
          name="環境保護イニシアティブの発表"
          abstract="Velocureが新たな環境保護イニシアティブを発表。持続可能な技術開発に注力します。"
        />
      </Link>
      <Link to="3">
        <ListItem
          name="グローバル教育プログラムの展開"
          abstract="Velocureが世界各地での教育プログラムを展開。教育機会の平等化を目指します。"
        />
      </Link>
      <Link to="2">
        <ListItem
          name="新しいテレポーテーションセンターの開設"
          abstract="Velocureが新しいテレポーテーションセンターを開設。より多くの地域へのアクセスを提供します。"
        />
      </Link>
      <Link to="1">
        <ListItem
          name="新技術開発の進展"
          abstract="Velocureがテレポーテーション技術のさらなる進化を遂げる新技術の開発を進行中。"
        />
      </Link>
    </>
  );
}
