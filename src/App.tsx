import Counter from "./components/counter-state";
import PropDemo from "./components/props-demo";
// import SwapListItems from "./components/swap-list-items";

const data = ["apple", "banana", "grapes"];

export default function App() {
  return (
    <>
      {/* <SwapListItems /> */}
      <Counter />
      <PropDemo data={data} />
    </>
  );
}
