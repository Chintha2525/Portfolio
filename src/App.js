import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Skill from './Components/Skill';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={
            <React.Fragment>
              <Header />
              <Home />
              <About />
              <Project />
              <Skill />
              <Contact />
            </React.Fragment>
          } />
          <Route exact path='/about' element={
            <React.Fragment>
              <Header />
              <About />
            </React.Fragment>
          } />
          <Route exact path='/project' element={
            <React.Fragment>
              <Header />
              <Project />
            </React.Fragment>
          } />
          <Route exact path='/skill' element={
            <React.Fragment>
              <Header />
              <Skill />
            </React.Fragment>
          } />
          <Route exact path='/contact' element={
            <React.Fragment>
              <Header />
              <Contact />
            </React.Fragment>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;