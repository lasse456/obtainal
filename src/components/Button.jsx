const Button = (props) => {
  return (
    <button className="border-[none] text-[12px] bg-[#ed4746] px-[28px] py-[12px] rounded-[100px] text-white font-[500]">
      {props.message}
    </button>
  );
};

export default Button;
