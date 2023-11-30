import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.scss';
import Header from './components/Header';
import Development from './components/Development';
import Hosting from "./components/Hosting";
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import './style/MediaQuery.scss';

function App() {
  return (
    <Router>  
       <Header />
       <Development />
       <Hosting />
       <Services />
       <About />
       <Footer />
    </Router>
  );
}

export default App;
