import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParamas";

const App = () => {
  return (
    <div>
      <h1></h1>
      <SearchParams />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
