import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";

import { Home } from "./components/Pages/Home/Home";
import { Offers } from "./components/Pages/Offers/Offers";
// import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* <Router path="./components/Pages/Home/Home.jsx">Home</Router> */}
        <Route path="/offers" element={<Offers />}   />
        {/* <Home />
        <Offers /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
