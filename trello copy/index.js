import React from "react";
import Board from "./containers/Board/Board";
import NavBar from "./containers/NavBar/NavBar";

let root = document.getElementById("root");
root.style.height = "100%";
root.style.width = "100%"

function Trello() {
 return (
     <div>
        <NavBar />
        <Board />
     </div>
 )
}

export default Trello