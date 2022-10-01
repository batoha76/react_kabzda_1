import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id; /* СОДЕРЖИМОЕ path МЩЖНО БЫЛО НАПИСАТЬ ВНУТРИ to={} */
    return (
        <div className={s.dialogsItem_dialog + ' ' + s.activ}>
            <NavLink to={path /* или так: "/dialogs/" + props.id */}>{props.name}</NavLink>
        </div>
    )
};



export default DialogItem;


