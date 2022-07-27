import React, { useState } from "react";

export default function AddItem(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description cannot be blank");
    } else {
      props.Add(title, description);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <>
      <form onSubmit={submit}>
        <label>Title:</label>
        <br />
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Enter your title"
        />
        <br />
        <br />
        <label>Description:</label>
        <br />
        <input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="Enter your title"
        />
        <br />
        <br />
        <button type="submit">Add new item</button>
      </form>
    </>
  );
}
