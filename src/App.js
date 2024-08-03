import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutePath from "./routes/Routes";

const App = () => {
  return (
   <>
    <BrowserRouter>
      <RoutePath />
    </BrowserRouter>
   </>
  );
}

export default App;
