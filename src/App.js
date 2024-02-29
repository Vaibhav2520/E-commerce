import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Shoes from "./pages/shoes";
import ShoppingCart from "./pages/shoppingcart";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/shoppingCart" element={<ShoppingCart/>}/>
          <Route path="/" element={<Landing />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
