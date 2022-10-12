
let rerenderEntireTree = () => {
    console.log('state is changed');
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 0 },
            { id: 2, message: 'It`s my first post', likesCount: 23 },
            { id: 3, message: 'bla bla bla', likesCount: 2 },
            { id: 4, message: 'oh, es!!!!', likesCount: 230 },],
        newPostText: 'from file `state`',
    },
    dialogsPage: {
        messages: [ /* ЭТО ВРЕМЕННОЕ РЕШЕНИЕ */
            { id: 1, message: 'Hello my friend!' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
        ],
        dialogsData: [ /* ЭТО ВРЕМЕННОЕ РЕШЕНИЕ */
            { id: 1, name: 'Veronica' },
            { id: 2, name: 'Anton' },
            { id: 3, name: 'Sonia' },
            { id: 4, name: 'Serega' },
            { id: 5, name: 'Diman' },
            { id: 6, name: 'Vlodimer' },
        ],
    },


};

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //наблюдатель
};

export default state;