import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import {HomePage} from "./pages/homepage/homepage.component";

function App() {
  return (
    <div >
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={Hats}/>
    </div>
  );
}

const Hats=()=> <h2>HATS</h2>;
export default App;
