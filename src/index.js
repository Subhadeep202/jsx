// 1.) import the rect and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2.) get a refrence to the div with ID root
const el = document.getElementById("root");

// 3.) Tell React to Take control of that element
const root = ReactDOM.createRoot(el);

// 4.)Create a compennet
function App() {
  const message = "Enter age";
  //   const name = "david";
  //   const age = 23;
  //   const date = new Date();
  // const time = date.toLocaleString();
  //   const message = "hi there!";
  //   let message = "bye there!";
  //   if (Math.random() > 0.5) {
  //     message = "hello there";
  //   }
  //   return <h1>{new Date().toLocaleTimeString()}</h1>;
  return (
    <input
      type="number"
      min={5}
      max={10}
      list={[1, 2, 3]}
      style={{ color: "red" }}
      alt={message}
    ></input>
  );
}

// 5.) Show the component on the screen
root.render(<App />);
