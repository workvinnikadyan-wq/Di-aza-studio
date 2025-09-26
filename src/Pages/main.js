import '../App.css';
import MainPage from '../Components/mymain';
import Seperator from '../Components/Seperator';
import Navbar from '../Components/Header';
import ImageSlider from "../Components/Slider";
import Footer from "../Components/Footer";

export default function Main() {
  return (
     <div className="App">
      <Navbar />
      <MainPage />
      <Seperator />
      <ImageSlider speed={80} />
      <Seperator />
      <Footer />

    </div>
  );
}