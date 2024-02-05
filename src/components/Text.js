export const Text1 = (props) => {
  return (
    <div
      className="text-[14px] text-gray-400 leading-[25px] "
      style={{
        color: localStorage.getItem("color-navbar"),
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export const Text2 = (props) => {
  return (
    <div
      className="text-[14px]  leading-[25px] "
      style={{
        color: localStorage.getItem("color-navbar"),
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export const Text3 = (props) => {
  return (
    <div
      className="text-[14px] leading-[25px] font-bold"
      style={{
        color: localStorage.getItem("color-navbar"),
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export const Text4 = (props) => {
  return (
    <div
      className="text-[11px] "
      style={{
        color: localStorage.getItem("color-navbar"),
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export const Text5 = (props) => {
  return (
    <div
      className="text-[11px] text-green-700 font-bold "
      style={{
        color: localStorage.getItem("color-navbar"),
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export const Text6 = (props) => {
  return (
    <div
      className="text-[12px] font-bold "
      style={{
        color: localStorage.getItem("color-navbar"),
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};
export const Text7 = (props) => {
  return (
    <div
      className="text-[20px] font-bold "
      style={{
        color: localStorage.getItem("color-navbar"),
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export const Text8 = (props) => {
  return (
    <div
      className="text-[11px] text-gray-400"
      style={{
        color: localStorage.getItem("color-navbar"),
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};
