import { useEffect, useState } from "react";

export default function FurnitureQues() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [input, setInput] = useState("");

  const handelFetchData = async () => {
    try {
      const response = await fetch("https://api.storerestapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await response.json();
      setData(responseData.data);
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handelFetchData();
  }, []);

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
