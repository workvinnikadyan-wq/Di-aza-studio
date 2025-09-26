import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/main';
import About from './Pages/About';
import Contact from './Pages/contact';

function App() {
  return (
     <Router>      
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
