import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <div className="ui action input" style={{padding: '10px'}}>
            <input 
            type="text" 
            name="first-name" 
            placeholder="Enter message" 
            value={message}
            onChange={(e) =>setMessage(e.target.value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="ui black button" type="submit" onClick={e => sendMessage(e)}>Send</button>
        </div>
    );
};

export default Input;
