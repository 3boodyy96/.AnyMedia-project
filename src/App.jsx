import DropDownMenu from "./components/dropDownMenu";
export default function App() {
    const handleSelect = (value) => {
    console.log("Selected:", value);
    // value will be "edit", "delete", or "share"
    if (value === "edit")   { /* ... */ }
    if (value === "delete") { /* ... */ }
    if (value === "share")  { /* ... */ }
  };
  return (
    <div>
      
    <DropDownMenu
      text="Actions"
      id="actions-menu"
      options={["edit", "delete", "share"]}
      onSelect={handleSelect}
      ButtonStyle={'w-60!'}
/>
    </div>
  )}