import "./App.css";
import { BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";

import { Home } from "./components/Pages/Home/Home";
import { Offers } from "./components/Pages/Offers/Offers";
import { Holidays } from "./components/Pages/Holidays/HolidayMainFile/Holidays";
// import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

import { Activities } from "./components/Pages/Activities/Activities";
import { Hotel } from "./components/Pages/Hotels/Hotel";

function App() {
  return (
    <>
    {/* <Hotel/> */}
    {/* <Holidays /> */}
      {/* <Navbar /> */}
      {/* <Activities /> */}
      {/* <Link to="/hotels"><Hotel/></Link> */}
      {/* <Link to="/Holidays"></Link> */}
        {/* <Router path="./components/Pages/Home/Home.jsx">Home</Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />}   />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </>
  );
}

export default App;
