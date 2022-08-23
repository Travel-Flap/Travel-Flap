import MarqueeComp from "./components/TopLine";
import  Navbar from "./components/Nav";
// import CollapsibleExample from "./Components/Navbar"
import { ControlledCarousel } from "./components/TopCorousel/Corousel";
import { TravelForm } from "./components/FormBelowCorousel/TravelForm";
import { DataCards } from "./components/Cards/Cards";
// import { MiddleCorousel } from "./components/MiddleCorousel/MiddleCorousel";
import { ImageTexCards } from "./components/CardWithSIdeText/imageTextcard";
import { MultiCardSlider } from "./components/MultiCardSlider/MultiCardSlider";
import { ContactUS } from "./components/ContactusSection/Contactus";
import { Footer } from "./components/Footer/Footer";
// import { Layout } from "./components/Layout/Layout";
// import { MediaControlCard } from "./components/cardwith side text/textcards";
// import { Gridview } from "./components/cardwith side text//Gridview";
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
    {/* <MiddleCorousel /> */}
    
    <br />
    <ImageTexCards />

    <br />
    <MultiCardSlider />

    <br />
    <ContactUS />

    <Footer />

    </div>
  );
}

export default App;
