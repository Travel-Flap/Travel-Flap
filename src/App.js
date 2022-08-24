import MarqueeComp from "./components/TopLine";
import  Navbar from "./components/Nav";
// import { HomePage } from "./components/Experiment Page/Homepage";
// import CollapsibleExample from "./Components/Navbar"
import { ControlledCarousel } from "./components/TopCorousel/Corousel";
import { TravelForm } from "./components/FormBelowCorousel/TravelForm";
import { DataCards } from "./components/Cards/Cards";
// import { ImageTexCards } from "./components/CardWithSIdeText/imageTextcard";
import { MultiCardSlider } from "./components/MultiCardSlider/MultiCardSlider";
import { Middleslider } from "./components/MiddleCorousel/Middleslider";
import { ContactUS } from "./components/ContactusSection/Contactus";
import { Footer } from "./components/Footer/Footer";
// import { Layout } from "./components/Layout/Layout";
// import { MediaControlCard } from "./components/cardwith side text/textcards";
// import { Gridview } from "./components/cardwith side text//Gridview";
import './App.css';

// import { DataCards  } from "./components/DataCards/DataCards";
import { CardText } from "./components/CardwithText/CardText";
import { TrendingNow } from "./components/TrendingNowCards/TrendingNow";

function App() {
  return (
    <div className="App">
      {/* <DataCards /> */}
      <MarqueeComp />
      {/* <br /> */}
      {/* <HomePage /> */}
      <Navbar />
      {/* <br /> */}
      <ControlledCarousel />
      <br />
      <TravelForm />

      <br />
      <DataCards />

      <br />
    <Middleslider />
    
    {/* <br />
    <ImageTexCards /> */}
    <br/>
    <CardText />

    <br />
    <MultiCardSlider />

    <br/>
    <TrendingNow />

    <br />
    <ContactUS />

    <Footer />

    
    
    </div>
  );
}

export default App;
