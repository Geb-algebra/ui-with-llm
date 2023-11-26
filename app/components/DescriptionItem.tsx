export default function DescriptionItem(props: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col py-2">
      <h2 className="font-bold text-lg text-primary">{props.title}</h2>
      <p className="py-2">{props.children}</p>
    </div>
  );
}
