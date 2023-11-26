import Subtitle from '~/components/Subtitle.tsx';
import DescriptionItem from '~/components/DescriptionItem.tsx';

export default function Page() {
  return (
    <>
      <Subtitle>企業理念</Subtitle>
      <DescriptionItem title="イノベーションの追求">
        私たちは、常に最先端の技術を追求し、テレポーテーションの可能性を拡張することで、未来の移動手段を再定義します。
      </DescriptionItem>
      <DescriptionItem title="人々の生活の質の向上">
        私たちの目標は、テクノロジーを通じて人々の日常生活を豊かにし、時間と距離の制約を超えた自由な移動を実現することです。
      </DescriptionItem>
      <DescriptionItem title="持続可能な未来への貢献">
        環境への影響を最小限に抑えながら、持続可能な技術の開発と普及に尽力します。
      </DescriptionItem>
      <DescriptionItem title="社会への責任">
        私たちは、ビジネスを通じて社会に貢献し、教育、文化交流、環境保護など、さまざまな分野でのイニシアティブを推進します。
      </DescriptionItem>
      <DescriptionItem title="未来への挑戦">
        私たちは、常に未来を見据え、新しい挑戦を恐れず、人類が直面する課題に対して革新的な解決策を提供します。
      </DescriptionItem>
    </>
  );
}
