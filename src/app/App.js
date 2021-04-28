import "./App.css";
import Auth from "../components/Auth/Auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../components/admin/home'
import Root from "../components/home/home";
import Burger from "../components/home/burger";
import UserAuth from "../components/Auth/userAuth";
function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Root} />
        <Route  path="/login/:id" component={UserAuth} />

        <Route  path="/burger" component={Burger} />
          <Route path="/admin/login" component={Auth} />
          <Route exact path="/admin" component={Home} />

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
