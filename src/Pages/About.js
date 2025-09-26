import '../App.css';
import MainPage from '../Components/aboutmain';
import Seperator from '../Components/Seperator2';
import Navbar from '../Components/Header';
import Whatwedo from "../Components/Whatwedo";
import WhyChoose from "../Components/WhyChoose";
import Footer from "../Components/Footer";


export default function About() {
  return (
     <div className="App">
      <Navbar />
      <MainPage />
      <Seperator />
      <Whatwedo />
      <Seperator />
      <WhyChoose />
      <Seperator />
      <Footer />
    </div>
  );
}