import React from "react";
import { useGlobalContext } from "./context";
import TodoItem from "./TodoItem";

const Todo = () => {
  const { input, setInput, AddItem, toggle } = useGlobalContext();
  return (
    <>
      <div className="main-div">
        <div className="child-div text-white">
          <div className="icon">
            <i className="fa-solid fa-clipboard-list text-warning"></i>
          </div>
          <h1 className="mt-4 mb-5">Add Your TODO Here</h1>
          <div className="addItem">
            <input
              type="text"
              className="p-2"
              placeholder="✍️ Add Your TODO"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            {toggle ? (
              <i
                className="fa-solid fa-plus plus-icon
            "
                title="Add todo"
                onClick={AddItem}
              ></i>
            ) : (
              <i
                className="fa-solid fa-pen-to-square text-success plus-icon
            "
                title="Add todo"
                onClick={AddItem}
              ></i>
            )}
          </div>

          <TodoItem />
        </div>
      </div>
    </>
  );
};

export default Todo;
