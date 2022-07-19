import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick ={handleDarkModeClick} text= {isDarkMode ? "Light Mode" : "Dark Mode"} />
      <ShoppingList items={itemData} />
    </div>
  );
}
//export {isDarkMode, setIsDarkMode}
export default App;


/*<header>
<h2>Shopster</h2>
<button onClick={handleDarkModeClick}>
  {isDarkMode ? "Dark" : "Light"} Mode
</button>
</header>*/