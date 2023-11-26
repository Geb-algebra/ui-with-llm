import Subtitle from '~/components/Subtitle.tsx';
import DescriptionItem from '~/components/DescriptionItem.tsx';

export default function Page() {
  return (
    <>
      <Subtitle>会社概要</Subtitle>
      <DescriptionItem title="会社名">株式会社ヴェロキュア Velocure</DescriptionItem>
      <DescriptionItem title="設立年月日">2028年5月30日</DescriptionItem>
      <DescriptionItem title="資本金">100億円</DescriptionItem>
      <DescriptionItem title="従業員数">1024人</DescriptionItem>
      <DescriptionItem title="所在地">秘境県翠ヶ丘市桜田町1-2-3</DescriptionItem>
      <DescriptionItem title="代表者">天空 遥人</DescriptionItem>
      <DescriptionItem title="事業内容">
        テレポーテーション技術の研究開発、テレポーテーションサービスの提供
      </DescriptionItem>
    </>
  );
}
