import React from "react";

const TodoItem = (props) => {
    return (
        <div>
            {props.items.map((elem) => (
                <li key={elem.id}>{elem.value} <button onClick={() => props.onDeleteList}>DELETE</button></li>
            ))}
        </div>
    )
}

export default TodoItem