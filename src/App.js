import {BrowserRouter , Switch, Route} from "react-router-dom";
import CalendarScreen from "./CalendarScreen";
import Home from "./Home";
import Login from"./Login";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
            <Route path='/'>
                <CalendarScreen/>
            </Route>
            <Route path='/home'>
                <Home/>
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
