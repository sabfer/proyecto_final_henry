import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Login from "./components/Landing/Login";
import Register from "./components/Landing/RegisterPage";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/register" render={() => <Register />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/settings" render={() => <Settings />} />
    </div>
  );
}

export default App;
