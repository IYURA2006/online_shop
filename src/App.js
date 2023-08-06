import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/Home/Home.js';
import Catalogue from './pages/Catalogue/Catalogue.js';

import "./styles/reset.css";



function App() {
  return (
    <div className="App">
      <Header />
        <Home /> 
      <Footer/>

    </div>
  );
}

export default App;
