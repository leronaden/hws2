import React from 'react'
import s from './FriendMessage.module.css'
import {FriendMessageType} from "../HW1";

export type MessagePropType = {
    message: FriendMessageType
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropType) => {
    return (
        <div
            id={'hw1-friend-message-1' + props.message.message} className={s.friendMessage}>
            <div className={s.friendImageAndText}>
                <img src={props.message.user.avatar} alt={'avatar'}
                    id={'hw1-friend-avatar-1'}/>

                <div className={s.friendText}>
                    <div id={'hw1-friend-name-1'} className={s.friendName}>
                       <div>{props.message.user.name}</div>
                    </div>
                    <pre id={'hw1-friend-text-1'} className={s.friendMessageText}>
                       <div>{props.message.message.text}</div>
                    </pre>
                </div>
            </div>
            <div className={s.angle}/>
            <div id={'hw1-friend-time-1'} className={s.friendTime}>
                <div>{props.message.message.time}</div>
            </div>
        </div>
    )
}

export default FriendMessage
