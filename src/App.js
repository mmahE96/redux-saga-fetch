import React, { Component } from "react";
import "./App.css";
import  Button  from "./Button";
import  Display  from "./Display";

function App() {  
  console.log(process.env)
  
    return (

      <div className="container">
        <Display />        
        <Button />
      </div>
    );
  
}



export default (App)
