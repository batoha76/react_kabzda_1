import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {

    let newPostElement = React.createRef();/* ВЫВОД СОДЕРЖИМОГО ПО НАЖАТИЮ НА КНОПКУ */

    let addPost = () => {/* ВЫВОД СОДЕРЖИМОГО ПО НАЖАТИЮ НА КНОПКУ */
        let text = newPostElement.current.value;
        alert(text);
    }

    let dialogsElements = props.state.dialogsData
        .map(dialogsData =>  <DialogItem name={dialogsData.name} id={dialogsData.id} /> );

    let messagesElements = props.state.messages/* ПРИСТАВКАfromApp ДОБАВЛЕН ЧТОБЫ Я ЛУЧШЕ ПОНЯЛ PROPS */
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
                <div>{/* ВЫВОД СОДЕРЖИМОГО ПО НАЖАТИЮ НА КНОПКУ */}
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>{/* ВЫВОД СОДЕРЖИМОГО ПО НАЖАТИЮ НА КНОПКУ */}
                    <button onClick={addPost}>add Post</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;


