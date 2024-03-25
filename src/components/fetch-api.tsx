import { useEffect, useState } from "react";

export default function FetchAPI() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const responce = await fetch("https://randomuser.me/api");
    const data = await responce.json();
    setData(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((e: any) => {
        return (
          <div className="flex space-x-2">
            <p>{e.name.first}</p>
            <p>{e.gender}</p>
          </div>
        );
      })}
    </div>
  );
}
