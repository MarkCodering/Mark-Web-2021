import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from './Pages/Projects';
import Youtube from './Pages/Youtube';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/youtube" component={Youtube}/>
      <Route path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
