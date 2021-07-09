import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home/Home";
import Service from "./Components/Service/Service";
import Shop from "./Components/Shop/Shop";
import Loc from "./Components/Loc/Loc";
import Header from "./Components/Header/Header";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/service' component={Service}/>
            <Route exact path='/shop' component={Shop}/>
            <Route exact path='/location' component={Loc}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
