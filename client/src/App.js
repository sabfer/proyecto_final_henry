import './App.css';
import { Route } from "react-router-dom";
import Landing from "./components/landingPage/index";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Landing />}/>
    </div>
  );
}

export default App;
