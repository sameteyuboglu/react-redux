/* eslint-disable react/prop-types */
const Input = ({ placeholder, type, id, name, onChange,value }) => {
  return (
    <input
      className="h-10 w-full border  rounded-md p-2 outline-none mt-3"
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
