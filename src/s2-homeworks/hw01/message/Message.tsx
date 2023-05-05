import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1"
//import avatar from "../avatar.png"


// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-1' + props.message.message} className={s.message}>
            <div className={s.imageAndText}>
                <img src={props.message.user.avatar} alt={'avatar'}
                     id={'hw1-avatar-1' + props.message.message.text}/>
                <div className={s.text}>
                    <div id={'hw1-name-1' + props.message.id} className={s.name}>
                        {props.message.user.name}
                    </div>
                    <pre id={'hw1-text-1' + props.message.id} className={s.messageText}>
                             {props.message.message.text}
                    </pre>
                </div>
            </div>
            <div className={s.angle}/>
            <div id={'hw1-time-1' + props.message.id} className={s.time}>
                {props.message.message.time}
            </div>
        </div>
    )
}

export default Message
