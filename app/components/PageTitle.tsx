export default function PageTitle(props: { children: React.ReactNode }) {
  return <h1 className="font-bold text-3xl text-primary py-12">{props.children}</h1>;
}
