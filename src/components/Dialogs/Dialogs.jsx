import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id; /* СОДЕРЖИМОЕ path МЩЖНО БЫЛО НАПИСАТЬ ВНУТРИ to={} */
    return (
        <div className={s.dialogsItem_dialog + ' ' + s.activ}>
            <NavLink to={path /* или так: "/dialogs/" + props.id */}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.massages_smassage}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [ /* ЭТО ВРЕМЕННОЕ РЕШЕНИЕ */
        {id: 1, name: 'Veronica'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Sonia'},
        {id: 4, name: 'Serega'},
        {id: 5, name: 'Diman'},
        {id: 6, name: 'Vlodimer'},
    ];

    let messages = [ /* ЭТО ВРЕМЕННОЕ РЕШЕНИЕ */
    {id: 1, message: 'Hello my friend!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    ];

    let dialogsElements = dialogsData
        .map(dialogsData =>  <DialogItem name={dialogsData.name} id={dialogsData.id} /> );
/*         [
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />,

    ]; */

   

    let messagesElements = messages
        .map(messages => <Message message={messages.message} />);

    return (
        <div className={s.content}>
            <div className={s.content_dialogs}>
                <div className={s.dialogs_dialogsItem}>
                    { dialogsElements }
                </div>
                <div className={s.content_massages}>
                    { messagesElements}
{/*                     <Message message={messages[0].message}/>
                    <Message message='How are you?'/>
                    <Message message='Yo'/>
                    <Message message='Yo'/>
                    <Message message='Yo'/> */}
                </div>
            </div>
        </div>
    )
};

export default Dialogs;


{/*                     ТАК БЫЛО ДО DialogItem :
                    <div className={s.dialogsItem_dialog + ' ' + s.activ}>
                        <NavLink to="/dialogs/1">Veronika</NavLink> 
                    </div>
                    <div className={s.dialogsItem_dialog}>
                        <NavLink to="/dialogs/2">Anton</NavLink>
                    </div> */}