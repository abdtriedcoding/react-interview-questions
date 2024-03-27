import { useState } from "react";

const useFormInput = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [profession, setProfession] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    switch (field) {
      case "name":
        setName(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      case "profession":
        setProfession(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, address, profession });
  };

  return {
    name,
    address,
    profession,
    handleSubmit,
    handleInputChange,
  };
};

export default useFormInput;
