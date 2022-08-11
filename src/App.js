import Description from "./components/Description";
import FeaturedWork from "./components/FeaturedWork";
import HeaderImg from "./components/HeaderImg";
import HeroSlider from "./components/HeroSlider";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import "./styles/main.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <HeaderImg />
      <Description />
      <OurServices />
      <FeaturedWork />
    </>
  );
}

export default App;
