import React from 'react'
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Restaurants from './components/Restaurants'

function App() {

  return (
    <div>
      <Routes>
        {/* Route for home page */ }
        <Route path='/' element={<Home />}/>
        {/* Route for restaurant page */}
        <Route path='/:id' element={<Restaurants />}/>
      </Routes>
    </div>
  );
}

export default App;