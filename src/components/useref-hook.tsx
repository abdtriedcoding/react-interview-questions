import { useRef, useState } from "react";

export default function Serversideform() {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function handelSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(0, inputRef.current.value.length);
    }, 0);
    console.log(input);
  }
  async function handelChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={handelSubmit}>
      <input ref={inputRef} value={input} onChange={handelChange} type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
