import React from "react";
import "./App.css";

function App() {
  const logIn = false;
  if (logIn) {
    return <h2>Welcome my brother</h2>;
  }
  return (
    <>
      <h1 className="text-3xl text-blue-800">Vite + React</h1>
      <p className="fontFamily-sans">
        I want to learn more about vite react, because it is a very good
        framework in javascript especial in UI and mobile app development.
      </p>
      <p>
        {logIn ? (
          <h2>{logIn}</h2>
        ) : (
          <h2 className="text-1xl text-blue-800">You are not allowed</h2>
        )}
      </p>
    </>
  );
}

export default App;
