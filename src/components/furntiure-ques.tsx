import { useEffect, useState } from "react";

export default function FurnitureQues() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <>
      {data.map((data) => (
        <p key={data.title} className="font-semibold text-lg p-2">
          {data.title}
        </p>
      ))}
    </>
  );
}
