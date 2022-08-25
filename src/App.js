import MarqueeComp from "./components/TopLine";
import  { Navbar } from "./components/Nav";
// import { HomePage } from "./components/Experiment Page/Homepage";
// import CollapsibleExample from "./Components/Navbar"
import { ControlledCarousel } from "./components/TopCorousel/Corousel";
import { TravelForm } from "./components/FormBelowCorousel/TravelForm";
import { DataCards } from "./components/Cards/Cards";
// import { ImageTexCards } from "./components/CardWithSIdeText/imageTextcard";
// import { MultiCardSlider } from "./components/MultiCardSlider/MultiCardSlider";
import { Middleslider } from "./components/MiddleCorousel/Middleslider";
import { ContactForm } from "./components/contactform/ContactForm";
import { Footer } from "./components/Footer/Footer";
import './App.css';

// import { DataCards  } from "./components/DataCards/DataCards";
import { CardText } from "./components/CardwithText/CardText";
import { TrendingNow } from "./components/TrendingNowCards/TrendingNow";
// import { CardCarousel } from "./components/CardCarousel/CardCarousel";

// import { TopPart } from "./components/TopPart/TopPart";
function App() {
  return (
    <div className="App">

    {/* <TopPart /> */}
      <MarqueeComp />
      <Navbar />

      <ControlledCarousel />
      <br />
      <TravelForm />

      <br />
      <DataCards />

      <br />
    <Middleslider />
  
    <br/>
    <CardText />

    {/* <br />
    <MultiCardSlider /> */}

    <br/>
    <TrendingNow />

    <br />
    <ContactForm />

    <Footer />

    
    {/* <CardCarousel /> */}
    </div>
  );
}

export default App;
