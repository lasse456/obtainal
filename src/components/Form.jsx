export const Form = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex gap-[10px]">
        <input
          className="w-[100%] shadow-third p-[12px] rounded-[8px] placeholder:text-[14px] placeholder:font-[300]"
          placeholder="Lasse"
        ></input>
        <input
          className="w-[100%] shadow-third p-[12px] rounded-[8px] placeholder:text-[14px] placeholder:font-[300]"
          placeholder="Osmann"
        ></input>
      </div>
      <input
        className="w-[100%] shadow-third p-[12px] rounded-[8px] placeholder:text-[14px] placeholder:font-[300]"
        placeholder="contact@gazellagroup.com"
      ></input>
      <input
        className="w-[100%] shadow-third p-[12px] rounded-[8px] placeholder:text-[14px] placeholder:font-[300]"
        placeholder="I'm contacting you in regard to ..."
      ></input>
    </div>
  );
};
