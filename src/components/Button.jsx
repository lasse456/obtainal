const Button = (props) => {
  return (
    <button className="border-[none] text-[11px] bg-[#ff5252] px-[14px] py-[8px] rounded-[100px] text-white font-[500]">
      {props.message}
    </button>
  );
};

export default Button;
