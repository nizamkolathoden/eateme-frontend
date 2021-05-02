import "./App.css";
import Auth from "../components/Auth/Auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../components/admin/home'
import Root from "../components/home/home";
import Burger from "../components/home/burger";
import UserAuth from "../components/Auth/userAuth";
import Drinks from "../components/home/drinks";
import Others from "../components/home/others";
import Profile from "../components/home/profile";
function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Root} />
        <Route  path="/login/:id/:foodName" component={UserAuth} />

        <Route  path="/burger" component={Burger} />
        <Route  path="/drinks" component={Drinks} />
        <Route  path="/other" component={Others} />
        <Route  path="/profile" component={Profile} />


          <Route path="/admin/login" component={Auth} />
          <Route exact path="/admin" component={Home} />

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
