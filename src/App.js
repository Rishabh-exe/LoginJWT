import { Routes,Route} from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
    </div>
  );
}

export default App;
