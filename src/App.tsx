import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {TwoMatrixCalc} from "./components/pages/TwoMatrixCalc";
import MainPage from "./components/pages/MainPage";
import BmiPage from "./components/pages/BmiPage";
import { IconContext } from 'react-icons';
import { ListItems } from './components/list/ListItems';
import './components/list/CalculatorList.css';
import {OneMatrixCalc} from "./components/pages/OneMatrixCalc";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <IconContext.Provider value={{ color: '#000',  size: '25px'}}>
                  <div className="navbar">
                      <img src={logo} className='logo' alt={"logo"}/>
                  </div>
                  <div className='nav-menu'>
                      <nav className={'nav-side'}>
                          <ul>
                              {ListItems.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                          <span>{item.title} </span> <span>{item.icon}</span>
                      </Link>
                    </li>)
                })}
              </ul>
          </nav>
          <Routes>
              <Route path="one-matrix" element={<OneMatrixCalc/>}/>
              <Route path="two-matrix" element={<TwoMatrixCalc/>}/>
              <Route path="/" element={<MainPage/>}/>
              <Route path="bmi" element={<BmiPage/>}/>
          </Routes>
        </div>
    </IconContext.Provider>
    </div>
  </BrowserRouter>
  );
}

export default App;
