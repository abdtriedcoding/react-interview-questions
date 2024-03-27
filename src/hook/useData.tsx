import { useEffect, useState } from "react";

export default function useData(endPoint: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handelFetchData = async () => {
    try {
      const response = await fetch(endPoint);
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

  return {
    data,
    loading,
    error,
  };
}
