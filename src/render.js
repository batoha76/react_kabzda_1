import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText } from './redux/state';


export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState/* у препода называется state */={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText} />
            </BrowserRouter>
        </React.StrictMode>
    );
};
