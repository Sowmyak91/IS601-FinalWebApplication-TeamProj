import {BrowserRouter , Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
            <Route path='/calendar'>
                <CalendarScreen/>
            </Route>
            <Route path='/home'>
                <Home/>
            </Route>
            <Route path="/">
                <Login />
            </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
