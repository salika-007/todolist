import React, { useState } from "react";
import TodoItem from "./components/Todoltem";
import TodoList from './components/TodoList'

const App = () => {
    const [list, setList] = useState([]);

    const addTodo = (data) => {
        setList((prevState) => {
            return [...prevState, data];
        });
    };
  const deleteListHandler = (id)=> {
    setList(list.filter((elem) => {
        if(elem.id !== id){
            return []
        }
    }))
  }
    return (
        <div>
            <TodoList onAddTodo={addTodo} />
            <TodoItem onDeleteList={deleteListHandler} items={list} />
        </div>
    );
}




export default App
