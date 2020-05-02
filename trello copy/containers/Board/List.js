import React, { useState } from "react";
import style from "./Board.module.css";

function List({title}) {
    const [showAddCard, setShowAddCard] = useState(false);
    const [cards, setCards] = useState(["zaira", "dela", "cruz"]);
    const [input, setInput] = useState("");
    const renderCards = cards.map(card => {
        return (
            <div className={style.cardTitle}>
                {card}
            </div>
        )
    })

    // document.addEventListener("mousemove", e => console.log(e.pageX, e.pageY))

    function addCard(key) {
        if (input) { //if input is empty, don't add a new card
            if (key === "Enter") { //if user entered enter to add a card
                setCards([...cards, input]);
                setInput("");
            }
        }
    }

    function cancelAddingCard() {
        setShowAddCard(false)
        setInput("")
    }

    return (
    <div>
        <div 
            className={style.list} 
            onMouseDown={e => console.log(e.target.getBoundingClientRect())}
            onMouseUp={e => console.log("up")}
        >
            {title}
            {renderCards}
            {
                showAddCard ?
                    <div>
                        <textarea 
                            type="text" 
                            placeholder="enter a title for this card"
                            value={input} 
                            onChange={e => setInput(e.target.value)} 
                            onKeyDown={e => addCard(e.key)}
                        /><br/>
                        <button onClick={e => addCard("Enter")}>{"Add Card"}</button>
                        <button onClick={e => cancelAddingCard()}>{"X"}</button>
                    </div>
                    :
                    <button className={style.addAnotherCard} onClick={e => setShowAddCard(true)}>
                        {"add a card"}
                    </button>
            }
        </div>
    </div>
    )
}

export default List;