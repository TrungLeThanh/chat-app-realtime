import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <div className="wrap-input">
            <form className="ui form" style={{display: 'flex', padding: '15px', position: 'fixed', width: '400px', bottom: '140px'}}>
                <input 
                type="text" 
                name="first-name" 
                placeholder="Enter message" 
                value={message}
                onChange={(e) =>setMessage(e.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
                <button className="ui black button" ype="submit" onClick={e => sendMessage(e)}>Send</button>
            </form>
        </div>
        
    );
};

export default Input;
