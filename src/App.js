import MarqueeComp from "./components/TopLine";
import  Navbar from "./components/Nav";
// import CollapsibleExample from "./Components/Navbar"
import { ControlledCarousel } from "./components/TopCorousel/Corousel";
import { TravelForm } from "./components/FromBelowCorousel/TravelForm";
import { DataCards } from "./components/Cards/Cards";
import { MiddleCorousel } from "./components/MiddleCorousel/MiddleCorousel";
import { ImageTexCards } from "./components/CardWithSIdeText/imageTextcard";
import { MultiCardSlider } from "./components/MultiCardSlider/MultiCardSlider";
import { ContactUS } from "./components/ContactusSection/Contactus";
import './App.css';

function App() {
  return (
    <div className="App">
      <MarqueeComp />
      <hr />
      <Navbar />
      <hr />
      <ControlledCarousel />
      <br />
      <TravelForm />

      <br />
      <DataCards />

      <br />
    <MiddleCorousel />
    
    <br />
    <ImageTexCards />

    <br />
    <MultiCardSlider />

    <br />
    <ContactUS />
    </div>
  );
}

export default App;
