import React, {useState} from 'react';
import './Join.css';

const Join = ({history}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const submitHandler = () =>{
        history.push(`/chat?name=${name}&room=${room}`);
    };

    return (
        <div className="wrap-join" onSubmit={submitHandler}>
            <h1 style={{textAlign: 'center'}}>JOIN CHAT GROUP &nbsp;&nbsp;<i className="fas fa-comment-dots"/></h1>
            <hr />
            <form className="ui form">
                <div className="field">
                    <label style={{color: '#fff'}}>Your name</label>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Enter your name.." required />
                </div>
                <div className="field" style={{marginBottom: '30px'}}>
                    <label style={{color: '#fff'}}>ID Room</label>
                    <input type="text" name="room" onChange={(e) => setRoom(e.target.value)} placeholder="Enter ID room..." />
                </div>
                <button className={`ui ${(!name || !room) ? 'disabled' : ''} blue button` } type="submit">Join chat</button>
            </form>
        </div>
    );
};

export default Join;
