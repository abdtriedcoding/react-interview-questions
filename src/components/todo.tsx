import { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [data, setData] = useState<string[]>([]);

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
            <p>{item}</p>
            <button onClick={() => handelDelete(item)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}
