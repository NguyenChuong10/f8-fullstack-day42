import {BrowserRouter as Router , Routes , Route} from "react-router";

import './App.css'
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/" element={<PrivateRoutes><Home/></PrivateRoutes>}></Route>
            <Route path="/login" element = {<Login/>}></Route>
        </Routes>
    </Router>
  )
}

export default App;
