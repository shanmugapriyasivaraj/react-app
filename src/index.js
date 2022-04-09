import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <App
    name={"test"}
    age={23}
    students={[23, 343]}
    address={{ name: "test" }}
    active={true}
  />,
  document.getElementById("root")
);
