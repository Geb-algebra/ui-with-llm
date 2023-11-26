import Abstract from '~/components/Abstract.tsx';
import DescriptionParagraph from '~/components/DescriptionParagraph.tsx';
import PageContainer from '~/components/PageContainer.tsx';
import PageTitle from '~/components/PageTitle.tsx';

export default function Page() {
  return (
    <PageContainer>
      <PageTitle>お問い合わせ</PageTitle>
      <Abstract>
        未来の技術を身近に感じてください。当社の最新のコミュニケーションツールを使って、直接お話ししましょう。
      </Abstract>
      <DescriptionParagraph>
        ヴェロキュア Velocure
        Inc.へのお問い合わせには、当社が開発した最新のコミュニケーションツール「テレコネクト」をご利用いただけます。このツールは、テレポーテーション技術を応用し、遠隔地からでもリアルタイムでの対話が可能です。まるで同じ部屋にいるかのような体験をお楽しみください。
      </DescriptionParagraph>
      <DescriptionParagraph>
        「テレコネクト」を使用するには、当社のウェブサイトからアクセスし、必要な情報を入力してください。お問い合わせの内容に応じて、専門のスタッフがリアルタイムで対応いたします。
      </DescriptionParagraph>
      <DescriptionParagraph>
        従来の電話やメールでのお問い合わせも引き続き受け付けておりますが、新しいテクノロジーを通じた独特な体験をぜひお試しください。私たちは、皆様からのご質問やご意見を心からお待ちしております。
      </DescriptionParagraph>
    </PageContainer>
  );
}
