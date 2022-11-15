//проверил 14.11.22, выявил и НЕ исправил 1 расхождение
import {createStore} from 'applyMiddleware';/* vscode сам
добавил { combineReducers } */
//import{createStore} from 'redux'; 14.11.22. почему не так?
import { combineReducers } from 'redux';
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;