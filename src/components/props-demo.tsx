export default function PropDemo({ data }: { data: string[] }) {
  return (
    <div>
      {data.map((e) => {
        return <p key={e}>{e}</p>;
      })}
    </div>
  );
}
