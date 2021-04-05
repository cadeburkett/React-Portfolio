import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />

        <Switch>
          {/* <Route exact path="/" component= */}
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
