import React from "react";
import s from './MyPosts.module.css';
import Post1 from "./Posts/Post1";



const MyPosts = (props) => {

/*     let posts = [ 
        { id: 1, message: 'Hi, how are you?', likesCount: 0 },
        { id: 2, message: 'It`s my first post', likesCount: 23 },
        { id: 3, message: 'bla bla bla', likesCount: 2 },
        { id: 4, message: 'oh, es!!!!', likesCount: 230 },
    ]; */

    let postsElements = props.posts.map (p => <Post1 message={p.message} LikesCount={p.likesCount} />);

    let newPostElement = React.createRef();
    
    let addPost = () => {
        //props.addPost ();
        props.dispatch({type: 'ADD-POST'});
    };

React.useEffect(()=>{
    console.log('created');
    return () => console.log('killed');
}, []);

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText (text);
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
        //ДВЕ ВЕРХНИЕ СТРОКИ == НИЖНЕЙ
        /* props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text}); */
    };

    return (
        <div className={s.MyPosts}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} 
                value={props.newPostText} />
            </div>
            <div>
                <button onClick={ addPost } >Add post</button>
            </div>
            <h3 className={`${s.item3} ${s.item}`}>My posts</h3>
              {postsElements}
{/*             <Post1 message={posts[0].message} LikesCount={posts[0].likesCount} />
            <Post1 message={posts[1].message} LikesCount={posts[1].likesCount} /> */}
            <p className={`${s.item2} ${s.item}`}>post2</p>
        </div>



    )
};

export default React.memo(MyPosts);