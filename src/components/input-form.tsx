import useFormInput from "../hook/useformInput";

const InputForm = () => {
  const { name, address, profession, handleSubmit, handleInputChange } =
    useFormInput();

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        type="text"
        onChange={(e) => handleInputChange(e, "name")}
        placeholder="Name"
      />
      <input
        value={address}
        type="text"
        onChange={(e) => handleInputChange(e, "address")}
        placeholder="Address"
      />
      <input
        value={profession}
        type="text"
        onChange={(e) => handleInputChange(e, "profession")}
        placeholder="Profession"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
