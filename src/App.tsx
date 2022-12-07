import React from 'react';
import MoviesList from "./containers/MoviesList/MoviesList";
import About from "./components/About/About";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
