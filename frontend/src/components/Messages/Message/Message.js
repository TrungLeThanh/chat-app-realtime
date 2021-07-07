import React from 'react';
import ReactEmoji from 'react-emoji';
import './Message.css';

const Message = ({ message: { text, user }, name}) => {
    let currentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName){
        currentUser = true;
    }

    console.log(user)

    return (
        currentUser ? 
        (
            <div className="mess-right">
                <div className="ui feed">
                    <div className="event">
                        <div className="content">
                            {ReactEmoji.emojify(text)}
                        </div>
                        <div className="label">
                            <b style={{fontSize: '10px', marginLeft: '7px'}} className="ui circular label">{trimmedName.charAt(0).toUpperCase()}</b>
                        </div>
                    </div>
                </div>
            </div>
        ) :
        (
            <div className="mess-left">
                <div className="ui feed">
                    <div className="event">
                        {
                            user === 'admin' ?
                            (<>
                                <div className="label">
                                    <b style={{fontSize: '10px'}} className="ui red circular label">AD</b>
                                </div>
                                <span style={{color: '#C23944'}}>{ReactEmoji.emojify(text)}</span>
                            </>) :
                            (<>
                                <div className="label">
                                    <b style={{fontSize: '10px'}} className="ui circular label">{user.charAt(0).toUpperCase()}</b>
                                </div>
                                <div className="content content1">
                                    {ReactEmoji.emojify(text)}
                                </div>
                            </>)
                        }
                    </div>
                </div>
            </div>
        )
    );
};

export default Message;
