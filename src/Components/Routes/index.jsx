import { Switch, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"

function Routes (){
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/signup">
                <Signup/>
            </Route>

            <Route path="/login">
                <Login/>
            </Route>
        </Switch>
    )
}

export default Routes