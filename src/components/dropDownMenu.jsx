import { useState } from "react";
import NormalButton from "../components/normalButton.jsx";

// props: options (array of strings or objects with label, value, action), onSelect (callback), text (button text), id, containerStyle (additional containerStyle classes)
function DropDownMenu({ options, onSelect, text, id, containerStyle,ButtonStyle,ButtonIconStyle }) {
  const [isOpen, setIsOpen] = useState(false);

  // Handle option selection
  const handleSelect = (value, optionAction) => {
    onSelect?.(value);
    optionAction?.();
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div id={id} className={`relative inline-block hover:brightness-125 transition-all duration-500 ${containerStyle ?? ""}`}>
      <div className="flex flex-row gap-0.5">
        {/* Toggle button */}
        <NormalButton
          id={id + "-button"}
          text={text}
          w="100px"
          h="60px"
          onClick={toggleDropdown}
          className={`
            rounded-r-none!
            after:rounded-r-none!
            after:rounded-bl-lg!
            hover:brightness-100!
            dropdown-toggle
            ${ButtonStyle ?? ''}
          `
        }
        />
        {/* Arrow icon button */}
        <NormalButton
          w="60px"
          h="60px"
          onClick={toggleDropdown}
          imgSrc="./src/assets/down-arrow.png"
          className={`
            rounded-l-none!
            dropdown-icon
            after:rounded-l-none!
            after:rounded-br-xl!
            hover:brightness-100!
            ${ButtonIconStyle ?? ''}
          `}
        />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="
          absolute w-full
          text-black bg-white
          dropdown-menu translate-y-5
          rounded-lg overflow-hidden
          border border-black/10
          shadow-md
        ">
          {options.map((option, index) => {
            const value       = (typeof option === "object" ? option.value  : option).trim();
            const label       = (typeof option === "object" ? option.label  : option).trim();
            const optionAction = typeof option === "object" ? option.action : undefined;

            return (
              <div
                key={index}
                className="p-2 border-b-2 border-b-black/10 last:border-b-0"
              >
                <button
                  onClick={() => handleSelect(value, optionAction)}
                  style={{ display: "block", cursor: "pointer" }}
                  className="w-full text-left hover:text-mist-900 transition duration-200"
                >
                  {label}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;