/* import logo from './logo.svg';  БЫЛО ТАК НО СДЕЛАЛ КАК У ПРЕПОДА*/
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


/* 
эта строка как у препода в 6 уроке:
*/
import React/* , { Component } */ from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
 


const App = () => {
  return (
    /* в дивах JSX-разметка */
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header/>
        <Navbar/>
        <div className='app_wrapper_content'>
            <Routes>
              <Route /* exact - это для точного пути, у меня
               работало и без него */ path="/dialogs" element={<Dialogs />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
