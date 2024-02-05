export const Button1 = (props) => {
  return (
    <div className="flex justify-between items-center">
      <button
        onClick={props.onClick}
        className=" w-[auto] px-12 rounded-lg h-[40px] bg-b  text-dark bg-white shadow-md"
      >
        <p className="font-medium text-[15px] leading-[25px]">{props.text}</p>
      </button>
    </div>
  );
};
