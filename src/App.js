import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
// import Project from './Components/Project';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />

        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
