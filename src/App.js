
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Topbar from './components/topbar';
import Landing from './pages/landing';
import Login from './pages/login';
import Signup from './pages/signup';
import Shoes from './pages/shoes';
import Cartpage from './pages/cartpage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        {/* <Topbar/> */}
          <Routes>
              <Route path='/cart' element={<Cartpage/>}/>
              <Route path="/" element={<Landing/>}/>
              <Route path='/shoes' element={<Shoes/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
