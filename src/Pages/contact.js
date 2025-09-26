import '../App.css';
import MainPage from '../Components/contactmain';
import Seperator from '../Components/Seperator2';
import Navbar from '../Components/Header';
import Footer from "../Components/Footer";
import Contact from "../Components/ContactForm";


export default function About() {
  return (
     <div className="App">
      <Navbar />
      <MainPage />
      <Seperator />
      <Contact />
      <Seperator />
      <Footer />
    </div>
  );
}