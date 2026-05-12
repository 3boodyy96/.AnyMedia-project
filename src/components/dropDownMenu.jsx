import { useState } from "react";

function DropDownMenu({ options, onSelect, text, id }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    onSelect?.(value); // safely call onSelect only if it was provided
    setIsOpen(false);
  };

  return (
    <div id={id} className="dropdown-container">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {text}
      </button>

      {isOpen && (
        <div className="dropdown-menu flex flex-col">
          {options.map((option, index) => {
            // Support both plain strings and { value, label } objects
            const value = typeof option === "object" ? option.value : option;
            const label = typeof option === "object" ? option.label : option;

            return (
              <button key={index} onClick={() => handleSelect(value)}>
                {label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;