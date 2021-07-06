import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name}) => {
    let currentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName){
        currentUser = true;
    }

    return (
        currentUser ? 
        (
            <div className="mess-right">
                <p>{trimmedName}</p>
                <div className="mess-box">
                    <p className="mess-text">
                        {ReactEmoji.emojify(text)}
                    </p>
                </div>
            </div>
        ) :
        (
            <div className="mess-left">
                <p>{user}</p>
                <div className="mess-box">
                    <p className="mess-text">
                        {ReactEmoji.emojify(text)}
                    </p>
                </div>
            </div>
        )
    );
};

export default Message;
