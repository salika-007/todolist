import React, { useState } from "react";

const TodoList = (props) => {
    const [value, setValue] = useState("");

    const valueHandler = (event) => {
        setValue(event.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const list = {
            value: value,
            id: Math.random().toString(),
        };
        props.onAddTodo(list)

    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={value} onChange={valueHandler} />
                <button>Todo Add</button>
            </form>
        </div>
    )

}


export default TodoList