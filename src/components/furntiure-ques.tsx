import { useState } from "react";
import useData from "../hook/useData";

export default function FurnitureQues() {
  const { data, error, loading } = useData(
    "https://api.storerestapi.com/products"
  );
  const [input, setInput] = useState("");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let filteredData = data;
  if (input.trim() !== "") {
    filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
  }

  return (
    <>
      <input
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      {filteredData.length > 0 ? (
        filteredData.map((data) => (
          <p key={data.title} className="font-semibold text-lg p-2">
            {data.title}
          </p>
        ))
      ) : (
        <p>No data available</p>
      )}
    </>
  );
}
