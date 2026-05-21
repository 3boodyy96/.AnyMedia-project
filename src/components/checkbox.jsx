import { useState } from "react";

function Checkbox({ onChange }) {
  const [checked, setChecked] = useState(false);
  function handleClick() {
    setChecked(!checked);
    if (onChange) onChange(!checked);
  }
  return (
    <div
      onClick={handleClick}
      className="
            overflow-visible
            w-10 h-10
            border-2 border-white
            cursor-pointer
            relative
          "
    >

        <img
          src="../src/assets/checkmark.png"
          alt="checkMark"
          className={`
                    object-contain
                    w-16 h-16
                    absolute -bottom-1 -right-2 scale-200 transition-opacity duration-100
                    ${checked ? "opacity-100" : "opacity-0"}
                  `}
        />
    </div>
  );
}
export default Checkbox;
