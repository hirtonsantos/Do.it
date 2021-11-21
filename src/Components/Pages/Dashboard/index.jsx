import React from "react";
import { Redirect } from "react-router";

function Dashboard ({authenticated}){
    if(!authenticated){
        return <Redirect to="/login"/>
    }
    return <h1>Dashboard</h1>
}

export default Dashboard