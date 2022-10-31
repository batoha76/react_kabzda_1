import React from "react";
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts key="someMyPosts" posts={props.profilePage.posts} 
                     newPostText={props.profilePage.newPostText}
                     /* addPost={props.addPost} */
                     dispatch={props.dispatch}/>
        </div>
    )
};

export default Profile;