import React from "react";
/* import { NavLink } from "react-router-dom"; */
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs_reducer';



const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    /* let newPostElement = React.createRef(); *//* ВЫВОД СОДЕРЖИМОГО ПО НАЖАТИЮ НА КНОПКУ ТО КАК Я ДЕЛАЛ*/

    /* ВЫВОД СОДЕРЖИМОГО ПО НАЖАТИЮ НА КНОПКУ ТО КАК Я ДЕЛАЛ*/
/*     let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }; */

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e)/*e = event */ => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    let dialogsElements = state.dialogsData
        .map(dialogsData =>  <DialogItem name={dialogsData.name} id={dialogsData.id} /> );

        /* ПРИСТАВКАfromApp, В СТРОКЕ НИЖЕ, ДОБАВЛЕН ЧТОБЫ Я ЛУЧШЕ ПОНЯЛ PROPS */
    let messagesElements = state.messages.map(m => <Message message={m.message} />);

    let newMessageBody = state.newMessageBody;

    return (
        <div className={s.content}>
            <div className={s.content_dialogs}>
                <div className={s.dialogs_dialogsItem}>
                    { dialogsElements }
                </div>
                <div className={s.content_massages}>
                    { messagesElements}
                </div>
                <div>
                    <div>
                        <textarea value={newMessageBody} 
                                  onChange={onNewMessageChange}
                                  placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
{/*             <div>
                    ПЕРЕДЕЛАЛ КАК У ПРЕПОДА
                    А ТАК БЫЛО У МЕНЯ:
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>add Post</button>
                    </div> 
                </div> */}
            </div>
        </div>
    )
};

export default Dialogs;


