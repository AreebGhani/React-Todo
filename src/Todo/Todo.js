import React, { useState, useEffect } from "react";
import AddItem from "./AddItem";
import Item from "./Item";

export default function Todo() {
  var todoItems;
  if (localStorage.getItem("todoItems")) {
    todoItems = JSON.parse(localStorage.getItem("todoItems"));
  } else {
    todoItems = [];
  }
  const [todoItemsArray, setTodoItemsArray] = useState(todoItems);
  const onDelete = (list) => {
    setTodoItemsArray(
      todoItemsArray.filter((array) => {
        return array !== list;
      })
    );
    localStorage.setItem("todoItems", JSON.stringify(todoItemsArray));
  };
  const onAdd = (saveTitle, saveDescription) => {
    var l = todoItemsArray.length;
    const newItems = {
      id: l + 1,
      title: saveTitle,
      description: saveDescription,
    };
    setTodoItemsArray([...todoItemsArray, newItems]);
  };
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItemsArray));
  }, [todoItemsArray]);
  return (
    <>
      <h1> Todo List </h1>
      <AddItem Add={onAdd} />
      <br />
      <hr />
      {todoItemsArray.length === 0
        ? "No item in list"
        : todoItemsArray.map((todoItemsArray) => {
            return (
              <Item
                key={todoItemsArray.id}
                list={todoItemsArray}
                Delete={onDelete}
              />
            );
          })}
    </>
  );
}
