import Subtitle from '~/components/Subtitle.tsx';
import Abstract from '~/components/Abstract.tsx';
import DescriptionParagraph from '~/components/DescriptionParagraph.tsx';

export default function Page() {
  return (
    <>
      <Subtitle>新卒採用プログラム</Subtitle>
      <Abstract>
        革新的なテレポーテーション技術を一緒に創り上げる、次世代の才能を募集しています。
      </Abstract>
      <DescriptionParagraph>
        ヴェロキュアは、新卒者を対象に、技術開発、プロジェクトマネジメント、ビジネス開発など様々な分野でのポジションを提供しています。我々の新卒採用プログラムは、革新的な環境で学び、成長し、キャリアを築く絶好の機会を提供します。
      </DescriptionParagraph>
      <DescriptionParagraph>
        応募資格は、大学または大学院を卒業予定の方、または最近卒業した方です。我々は多様なバックグラウンドを持つ候補者を歓迎し、実務経験よりもポテンシャルと情熱を重視します。
      </DescriptionParagraph>
      <DescriptionParagraph>
        採用プロセスには、書類選考、適性試験、面接が含まれます。我々と一緒に未来を切り拓く旅に出ましょう。
      </DescriptionParagraph>
    </>
  );
}
