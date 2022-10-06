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
 


const App = (props) => {

  return (
    /* в дивах JSX-разметка */
    /* <BrowserRouter> ПЕРЕНЕС В index.js */
      <div className='app_wrapper'>
        <Header/>
        <Navbar/>
        <div className='app_wrapper_content'>
            <Routes>
              <Route /* exact - это для точного пути, у меня работало и без него */ 
                path="/dialogs" element={<Dialogs 
                state={props.appState.dialogsPage}/>} />
              <Route path="/profile" element={<Profile state={props.appState.profilePage} 
              addPost={props.addPost}/>} />
{/*               ЕЩЁ ОДИН ВАРИАНТ Route :
              <Route path="/dialogs" render={ () => <Dialogs />} />
              <Route path="/profile" render={ () => <Profile />} /> */}
            </Routes>
        </div>
      </div>
    /* </BrowserRouter> */
  );
}

export default App;
