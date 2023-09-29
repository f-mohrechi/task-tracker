import React from "react";

function Button({ text, color, bgcolor, onAdd, show }) {
  return (
    <button
      onClick={onAdd}
      className={`${bgcolor} ${color} px-3 py-1 rounded-lg text-lg outline-none`}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "add",
  bgcolor: "steelBlue",
  color: "white",
};

export default Button;
