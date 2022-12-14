import "./App.css";
import { BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";

import { Home } from "./components/Pages/Home/Home";
import { Offers } from "./components/Pages/Offers/Offers";
import { Holidays } from "./components/Pages/Holidays/HolidayMainFile/Holidays";
// import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

import { Activities } from "./components/Pages/Activities/Activities";
import { Hotel } from "./components/Pages/Hotels/Hotel";
import { Visa } from "./components/Pages/Visa/Visa";
import { VisaDetails} from "./components/Pages/Visa/VisaInnerpages/VisaDetails";
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
        {/* <Router path="/home" element={<Home/>}></Router> */}
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />}   />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/visa" element={<Visa/>}/>
        <Route path="/visadetail" element={<VisaDetails/>} />
      </Routes>
    </>
  );
}

export default App;
