import { useState, ChangeEvent } from "react";

export default function Median2sortedArrays(): JSX.Element {
  const [arr1, setArr1] = useState<string>("");
  const [arr2, setArr2] = useState<string>("");
  const [ans, setAns] = useState<number | null>(null);

  const getMedian = () => {
    const splitArr1: string[] = arr1.split(",");
    const splitArr2: string[] = arr2.split(",");
    const mergeArray: string[] = [...splitArr1, ...splitArr2];
    const sortedArray: string[] = mergeArray.sort(
      (a, b) => Number(a) - Number(b)
    );
    const mid: number = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
      setAns((Number(sortedArray[mid - 1]) + Number(sortedArray[mid])) / 2);
    } else {
      setAns(Number(sortedArray[mid]));
    }
  };

  const handleArr1Change = (e: ChangeEvent<HTMLInputElement>) => {
    setArr1(e.target.value);
  };

  const handleArr2Change = (e: ChangeEvent<HTMLInputElement>) => {
    setArr2(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter array elements separated by commas"
        onChange={handleArr1Change}
      />
      <input
        type="text"
        placeholder="Enter array elements separated by commas"
        onChange={handleArr2Change}
      />
      <button onClick={getMedian}>Get Median</button>
      <p>{ans !== null ? `Median: ${ans}` : ""}</p>
    </div>
  );
}
