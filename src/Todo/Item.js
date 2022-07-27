import React from "react";

export default function Item({ list, Delete }) {
  return (
    <>
      <h2> {list.title} </h2>
      <p> {list.description} </p>
      <button
        onClick={() => {
          Delete(list);
        }}
      >
        Delete
      </button>
      <br />
      <br />
    </>
  );
}
