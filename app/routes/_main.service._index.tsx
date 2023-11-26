import { Link } from '@remix-run/react';
import IndexPageItem from '~/components/IndexPageItem.tsx';

export default function Page() {
  return (
    <>
      <Link to="instant-transport">
        <IndexPageItem
          name="インスタント・トランスポート・サービス"
          abstract="「どこへでも、瞬時に」—安全かつ迅速なテレポーテーション輸送サービス。"
        />
      </Link>
      <Link to="logistics-data-transport">
        <IndexPageItem
          name="データ＆物流スピード輸送"
          abstract="「あらゆる物を、瞬く間に」—革新的なデータと物品の瞬時輸送ソリューション。"
        />
      </Link>
      <Link to="teleportation-consulting">
        <IndexPageItem
          name="テレポーテーション技術コンサルティング"
          abstract="「未来の移動を、今」—テレポーテーション技術の導入と最適化を支援。"
        />
      </Link>
    </>
  );
}
