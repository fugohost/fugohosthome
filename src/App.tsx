import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.scss';
import Header from './components/Header';
import Development from './components/Development';
import Services from './components/Services';


function App() {
  return (
    <Router>  
       <Header />
       <Development />
       <Services />
    </Router>
  );
}

export default App;
