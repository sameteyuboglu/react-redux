/* eslint-disable react/prop-types */
const Button = ({ onClick, buttonText }) => {
  return (
    <button
      className="w-full h-10 bg-indigo-600 flex text-white items-center justify-center mt-4 rounded-md border border-indigo-500"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
