export default function IndexPageItem(props: { name: string; abstract?: string }) {
  return (
    <div className="flex px-6 py-4 w-full border-y-2 border-secondary">
      <h2 className="text-primary w-72">{props.name}</h2>
      <p className="pl-6 text-sm">{props.abstract ?? ''}</p>
    </div>
  );
}
