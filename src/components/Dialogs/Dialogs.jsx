import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {


    let dialogsElements = props.herdialogsData
        .map(dialogsData =>  <DialogItem name={dialogsData.name} id={dialogsData.id} /> );

    let messagesElements = props.fromApp_Messages/* ПРИСТАВКАfromApp ДОБАВЛЕН ЧТОБЫ Я ЛУЧШЕ ПОНЯЛ PROPS */
        .map(messages => <Message message={messages.message} />);

    return (
        <div className={s.content}>
            <div className={s.content_dialogs}>
                <div className={s.dialogs_dialogsItem}>
                    { dialogsElements }
                </div>
                <div className={s.content_massages}>
                    { messagesElements}
                </div>
            </div>
        </div>
    )
};

export default Dialogs;


