import React from "react";
import { useGlobalContext } from "./context";

const TodoItem = () => {
  const { item, handleDelete, handleEdit, handleRemoveAll } =
    useGlobalContext();
  return (
    <div className="showItem mt-5">
      {item.map((cur) => {
        return (
          <div className="eachItem my-2" key={cur.id}>
            <h4>{cur.name}</h4>

            <div className="edit-icon">
              <i
                className="fa-solid fa-pen-to-square text-success"
                title="Edit Item"
                onClick={() => {
                  handleEdit(cur.id);
                }}
              ></i>
            </div>
            <div className="delete-icon">
              <i
                className="fa-solid fa-trash-can text-danger"
                title="Delete Item"
                onClick={() => {
                  handleDelete(cur.id);
                }}
              ></i>
            </div>
          </div>
        );
      })}
      <div className="remove-all my-5">
        <button
          className="btn btn-outline-danger"
          disabled={item.length === 0}
          onClick={handleRemoveAll}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
