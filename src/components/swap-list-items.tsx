// Que: Create two lists and make functionality such that if click on a list item it will swap with the another created list item when marked checked, button  should be there to swap that marked list items.

import { useState } from "react";

export default function SwapListItems() {
  const [list1, setList1] = useState([
    { title: "Shoe", checked: false },
    { title: "Shirt", checked: false },
    { title: "Hat", checked: false },
  ]);

  const [list2, setList2] = useState([
    { title: "Watch", checked: false },
    { title: "Jacket", checked: false },
    { title: "Lens Frame", checked: false },
  ]);

  const handelSelect = (index: number) => {
    const updatedList = [...list1];
    updatedList[index].checked = !updatedList[index].checked;
    setList1(updatedList);
  };

  const handelSwapItem = () => {
    const updatedList1 = [...list1];
    const updatedList2 = [...list2];
    updatedList1.forEach((item, index) => {
      if (item.checked) {
        [updatedList2[index].title, updatedList1[index].title] = [
          updatedList1[index].title,
          updatedList2[index].title,
        ];
        updatedList1[index].checked = false;
      }
    });
    setList1(updatedList1);
    setList2(updatedList2);
  };

  return (
    <>
      <div className="max-w-5xl w-full mx-auto justify-center items-center space-y-5 p-4">
        <div className="flex space-x-8">
          <div>
            <h1 className="font-semibold text-xl">List 1</h1>
            <ul>
              {list1.map((item, index) => (
                <div className="flex space-x-2 items-center">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onClick={() => handelSelect(index)}
                  />
                  <li key={index}>{item.title}</li>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-xl">List 2</h1>
            <ul>
              {list2.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <button
          onClick={handelSwapItem}
          className="p-4 bg-black text-white rounded-md"
        >
          Swap Item List
        </button>
      </div>
    </>
  );
}
