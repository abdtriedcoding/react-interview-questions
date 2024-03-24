import { useEffect, useState } from "react";

export default function FetchAPI() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const response = await fetch(`https://randomuser.me/api?page=${1}`);
    const responce = await response.json();
    setData(responce.results);
    setPage((prev) => prev + 1);
  };

  const fetchMore = async () => {
    const response = await fetch(`https://randomuser.me/api?page=${page}`);
    const responce = await response.json();
    setData((prev) => [...prev, ...responce.results]);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((e: any, index) => {
        return (
          <div className="flex space-x-2" key={index}>
            <p>{e.name.first}</p>
            <p>{e.gender}</p>
          </div>
        );
      })}
      <button onClick={fetchMore}>Load More</button>
    </div>
  );
}
