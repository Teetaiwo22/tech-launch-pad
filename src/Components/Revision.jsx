import React from "react";

const Revision = () => {
  const name = "Tayo";
  const x = 7;
  const y = 8;
  const names = ["Taiwo", "Tayo", "Toyin"];
  const loggedIn = true;
  const styles = {
    color: "green",
    fontSize: "55px",
  };
  return (
    <div>
      <h1 className="text-5xl">Hello</h1>
      <p style={{ color: "red", fontSize: "24px" }}>Hello {name}</p>
      <p style={styles}>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h1>Hello Member</h1> : ""}
    </div>
  );
};

export default Revision;
