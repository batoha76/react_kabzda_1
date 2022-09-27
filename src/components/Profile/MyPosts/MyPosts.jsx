import React from "react";
import s from './MyPosts.module.css';
import Post1 from "./Posts/Post1";



const MyPosts = () => {

    let posts = [ /* ЭТО ВРЕМЕННОЕ РЕШЕНИЕ */
        { id: 1, message: 'Hi, how are you?', likesCount: 0 },
        { id: 2, message: 'It`s my first post', likesCount: 23 },
        { id: 3, message: 'bla bla bla', likesCount: 2 },
        { id: 4, message: 'oh, es!!!!', likesCount: 230 },
    ];

    let postsElements = posts.map (p => <Post1 message={p.message} LikesCount={p.likesCount} />)

    return (
        <div className={s.MyPosts}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <h3 className={`${s.item3} ${s.item}`}>My posts</h3>
              {postsElements}
{/*             <Post1 message={posts[0].message} LikesCount={posts[0].likesCount} />
            <Post1 message={posts[1].message} LikesCount={posts[1].likesCount} /> */}
            <p className={`${s.item2} ${s.item}`}>post2</p>
        </div>



    )
};

export default MyPosts;