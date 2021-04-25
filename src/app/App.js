import "./App.css";
import Auth from "../components/Auth/Auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../components/admin/home'
import Root from "../components/home/home";
function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Root} />
          <Route path="/admin/login" component={Auth} />
          <Route exact path="/admin" component={Home} />

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
