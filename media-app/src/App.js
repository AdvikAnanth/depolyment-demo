import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
function App() {
  return (
    <div>
      <Header/>
  <div className="container">
    <div className="about">
   <h1> 
    <b>Make</b><br/>
   <b> remote work</b>
   </h1>
    
      <p>Get your team in sync,no matter your location.
       Streamline processes,create team virtuals,and
      watch productivity soar.</p>
      <button><h3>Learn more</h3></button>
      <div className="last">
      <h5> databiz</h5>
      <h5>audipphile</h5>
      <h5>meet</h5>
      <h5>maker</h5>
      </div>

    </div>
    
  <div className="Image">
  <img src={process.env.PUBLIC_URL + '/hero.png'} alt="" />
  </div>
  </div>


  </div>
  );
}

export default App; 
