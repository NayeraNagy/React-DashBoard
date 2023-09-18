import logo from "./logo.svg";
import "./App.css";
import React from "react";

const App = () => {
  return (
    <>
      <div class="p-6 max-w-sm mx-auto bg-pink-500 rounded-full shadow-lg flex items-center space-x-4 hover:bg-green-900 hovwer:shadow-2xl hover:rounded-none">
        <div class="shrink-0"></div>
        <div>
          <div class="text-xl font-medium text-black ;">ChitChat</div>
          <p class="text-red-900 ">You have a new message!</p>
        </div>
      </div>
      <h1 className="underline text-6xl ">App</h1>
    </>
  );
};

export default App;
