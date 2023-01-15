import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [lightmode, setLightMode] = useState(true);
  const appClass = lightmode? "App light" : "App dark"
  function HandleMode() {
    setLightMode((lightmode) => !lightmode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={HandleMode}>{lightmode? "Light" : "Dark"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
