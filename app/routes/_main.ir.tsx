import PageContainer from '~/components/PageContainer.tsx';
import PageTitle from '~/components/PageTitle.tsx';
import DescriptionItem from '~/components/DescriptionItem.tsx';

export default function Page() {
  return (
    <PageContainer>
      <PageTitle>IR情報</PageTitle>
      <DescriptionItem title="最新の業績">2029年度売上高 500億円、営業利益 120億円</DescriptionItem>
      <DescriptionItem title="前年比増減">売上高 30%増、営業利益 25%増</DescriptionItem>
      <DescriptionItem title="資産総額">資産総額 800億円</DescriptionItem>
      <DescriptionItem title="負債総額">負債総額 300億円</DescriptionItem>
      <DescriptionItem title="自己資本比率">自己資本比率 60%</DescriptionItem>
      <DescriptionItem title="研究開発費">研究開発費 200億円</DescriptionItem>
      <DescriptionItem title="海外売上比率">海外売上比率 40%</DescriptionItem>
      <DescriptionItem title="主要投資プロジェクト">
        新世代テレポーテーション技術開発、宇宙探査支援プログラム
      </DescriptionItem>
      <DescriptionItem title="配当政策">年間配当金総額 10億円、配当利回り 2%</DescriptionItem>
      <DescriptionItem title="財務健全性">流動比率 120%、速動比率 100%</DescriptionItem>
    </PageContainer>
  );
}
