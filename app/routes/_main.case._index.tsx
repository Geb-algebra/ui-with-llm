import { Link } from '@remix-run/react';
import IndexPageItem from '~/components/IndexPageItem.tsx';

export default function Page() {
  return (
    <>
      <Link to="experiment">
        <IndexPageItem
          name="世界記録破りの瞬間移動実験"
          abstract="Velocureが行った画期的な実験で、国際宇宙ステーションと地球間のテレポーテーションに成功。わずか数秒での物資輸送を実現し、宇宙探査の新たな地平を開きました。"
        />
      </Link>
      <Link to="redefine-cities">
        <IndexPageItem
          name="都市の崩壊と再定義：テレポーテーションによる居住パターンの変革"
          abstract="Velocureのテレポーテーション技術により、通勤や移動の必要性がなくなり、人々は都市から郊外や自然豊かな地域へ移住。この結果、過密都市の問題が解消され、新たな生活スタイルとコミュニティの形成が促進されました。"
        />
      </Link>
      <Link to="new-cultural-exchange">
        <IndexPageItem
          name="文化交流の新時代：世界の芸術を瞬間移動"
          abstract="Velocureは世界各地の美術館と協力し、貴重な芸術品を瞬時に世界中に展示。国境を越えた文化交流と芸術の普及に革命をもたらしました。"
        />
      </Link>
    </>
  );
}
