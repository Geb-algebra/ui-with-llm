export default function IndexPageItem(props: { name: string; abstract?: string }) {
  return (
    <div className="flex flex-col py-6 px-6 my-6 w-full border rounded-2xl border-secondary gap-6">
      <h2 className="font-bold text-lg text-primary">{props.name}</h2>
      {props.abstract && <p className="py-2">{props.abstract}</p>}
    </div>
  );
}
