import { Route } from "react-router-dom";
import Landing from "./components/LandingPage/Landing";
import Login from "./components/LandingPage/Login";
import Register from "./components/LandingPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/register" render={() => <Register />} />
    </div>
  );
}

export default App;
