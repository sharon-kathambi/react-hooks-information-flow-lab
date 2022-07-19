import React from "react";

function Header({onDarkModeClick, text}){

return (
    <div>
        <header>
        <h2>Shopster</h2> 
       <button onClick={onDarkModeClick}>{text}</button>
       </header>
    </div>
    )
}

export default Header;