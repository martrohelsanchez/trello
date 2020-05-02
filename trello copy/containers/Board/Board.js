import React, { useState } from "react";
import style from "./Board.module.css";
import List from "./List"

function Board() {
    const [listsTitle, setListTitle] = useState(["to-do", "done", "doing"]);
    const [input, setInput] = useState("");
    const [showListComposer, setShowListComposer] = useState(false);
    let renderList = listsTitle.map((title, i) => {
        return (
            <List title={title}/>
        )
    })

    function addList(key) {
        if (input) {
            if (key == "Enter") {
                setListTitle([...listsTitle, input])
                setShowListComposer(false);
                setInput("");
            }
        }
    }
    
    return (
        <div className={style.board}>
            {renderList}
            <div>
                <div className={style.addList}>
                {
                    showListComposer ?
                        <div>
                            <input
                                type="text"
                                placeholder="Enter list title..."
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => addList(e.key)}
                            /><br />
                            <button onClick={e => addList("Enter")}>{"Add List"}</button>
                            <button onClick={e => setShowListComposer(false)}>{"X"}</button>
                        </div>
                    :
                        <button onClick={e => setShowListComposer(true)}>
                            {"add another list"}
                        </button>
                }
            </div>
            </div>
        </div>
    );
}

export default Board;