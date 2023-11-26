export default function PageContainer(props: { children: React.ReactNode }) {
  return <div className="w-full max-w-7xl px-24 py-32 mx-auto">{props.children}</div>;
}
