import { Switch, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import Dashboard from "../Pages/Dashboard"
import { useEffect, useState } from "react"

function Routes (){

    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        
        const token = JSON.parse(localStorage.getItem("@Doit:token"))

        if (token){
            return setAuthenticated(true)
        }
    }, [authenticated])

    return(
        <Switch>
            <Route exact path="/">
                <Home authenticated={authenticated}/>
            </Route>

            <Route path="/signup">
                <Signup authenticated={authenticated}/>
            </Route>

            <Route path="/login">
                <Login
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}/>
            </Route>

            <Route path="/dashboard">
                <Dashboard authenticated={authenticated}/>
            </Route>
        </Switch>
    )
}

export default Routes