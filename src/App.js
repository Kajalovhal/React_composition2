import React from "react";
import Tooltip from "./componenet/Tooltip";

const App = () => {
  return (
    <div>
      <Tooltip text="I'm a Tooltip!">
        <span>Hover over me</span>
      </Tooltip>
    </div>
  );
};

export default App;
