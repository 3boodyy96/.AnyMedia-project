function DropDownMenu({ options, onSelect }) {
  return (
    <div className="dropdown-menu">  
      {options.map((option) => (
        <button key={option.value} onClick={() => onSelect(option.value)}>
          {option.label}
        </button>
      ))}
    </div>
  );
}