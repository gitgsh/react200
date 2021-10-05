import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import Home from "./Home";
import List from "./List";
import Profile from "./Profile";

const AppRouter=()=>{
    return(
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/profile">
                    <Profile />
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/list">
                    <List />
                </Route>
            </Switch>

        </Router>
    );
}
export default AppRouter;