import { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [data, setData] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [index, setIndex] = useState(0);

  const handelAdd = () => {
    if (!input) return alert("Please input value");
    const arr = [...data, input];
    setData(arr);
    setInput("");
  };

  const handelDelete = (item: string) => {
    const arr = [...data];
    const newarr = arr.filter((e) => e !== item);
    setData(newarr);
  };

  const handelChecked = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    setChecked(e.target.checked);
    setIndex(i);
  };

  return (
    <>
      <div className="flex space-x-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button onClick={handelAdd}>Add</button>
      </div>
      {data.map((item, i) => {
        return (
          <div className="flex space-x-3" key={i}>
            <input type="checkbox" onChange={(e) => handelChecked(e, i)} />
            <p>{item}</p>
            {checked && i === index && (
              <button onClick={() => handelDelete(item)}>Delete</button>
            )}
          </div>
        );
      })}
    </>
  );
}
