import React from "react";

function Employee({ id, username, task, image, deleted, updateEmployees }) {
  function addToDeleted() {
    fetch(`http://localhost:9292/employees/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
        Accept: "Application/json",
      },
      body: JSON.stringify({ delete: !deleted }),
    })
      .then((response) => response.json())
      .then((data) => updateEmployees(data))

      .catch((error) => console.log(error));
  }

  return (
    <div id={id}>
      <h3>{username}</h3>
      <img src={image} alt="employee" />
      <p>
        <strong>{task}</strong>
      </p>

      <button onClick={addToDeleted}>
        {deleted ? "Deleted" : "Delete"}
      </button>
    </div>
  );
}

export default Employee;
