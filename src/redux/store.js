/* проверил 14.11.22, исправленно 1 расхождение */

import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 0 },
                { id: 2, message: 'It`s my first post', likesCount: 23 },
                { id: 3, message: 'bla bla bla', likesCount: 2 },
                { id: 4, message: 'oh, es!!!!', likesCount: 230 },],
            newPostText: 'from file `state`',
        },
        dialogsPage: {
            messages: [ 
                { id: 1, message: 'Hello my friend!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
            ],
            dialogs: [ /* было до 42 урока dialogsData */
                { id: 1, name: 'Veronica' },
                { id: 2, name: 'Anton' },
                { id: 3, name: 'Sonia' },
                { id: 4, name: 'Serega' },
                { id: 5, name: 'Diman' },
                { id: 6, name: 'Vlodimer' },
            ],
            newMessageBody: '',
        },
        sidebar: {},
    },
    _callSubscriber  () {
        console.log('state is changed');
    },
    getState () {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer; //наблюдатель он же паттерн
    },

   /*  addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    }, */
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;

window.store = store;