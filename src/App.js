import "./App.css";
import { BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";

import { Home } from "./components/Pages/Home/Home";
import { Offers } from "./components/Pages/Offers/Offers";
import { Holidays } from "./components/Pages/Holidays/HolidayMainFile/Holidays";
// import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
    {/* <Holidays /> */}
      {/* <Navbar /> */}
        {/* <Router path="./components/Pages/Home/Home.jsx">Home</Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />}   />
      </Routes>
    </>
  );
}

export default App;
