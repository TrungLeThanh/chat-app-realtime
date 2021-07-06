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
            <h1 style={{textAlign: 'center'}}>Join chat</h1>
            <form className="ui form">
                <div className="field">
                    <label style={{color: '#fff'}}>Name</label>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="First Name" />
                </div>
                <div className="field">
                    <label style={{color: '#fff'}}>Room</label>
                    <input type="text" name="room" onChange={(e) => setRoom(e.target.value)} placeholder="First Name" />
                </div>
                <button className={`ui ${(!name || !room) ? 'disabled' : ''} button` } type="submit">Join</button>
            </form>
        </div>
    );
};

export default Join;
