const Button = ({ name }) => {
  return (
    <>
      <button className="bg-blue-400 p-2 text-xl text-white w-40">
        {name}
      </button>
    </>
  );
};

export default Button;
