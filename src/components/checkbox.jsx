import { useState } from "react";

function Checkbox({ onChange }) {
    const [checked, setChecked] = useState(false);
    function handleClick() {
        setChecked(!checked);
        if (onChange) onChange(!checked);
    }
    return (
        <div
            className="relative border-2 border-white w-10 h-10 cursor-pointer overflow-visible"
            onClick={handleClick}
        >
            {checked && (
                <img
                    src="../src/assets/checkmark.png"
                    alt="checkMark"
                    className="absolute w-16 h-16 -bottom-1 -right-2 scale-200 object-contain"
                />
            )}
        </div>
    );
}
export default Checkbox;