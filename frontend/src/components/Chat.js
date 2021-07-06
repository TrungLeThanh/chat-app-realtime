import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from './InfoBar';
import Input from './Input';

let socket;

const Chat = ({location}) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    const ENDPOINT = 'ws://localhost:5000';

    useEffect(() =>{
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT, { transports: [ 'websocket','polling', 'flashsocket'] });

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room}, () => {
            
        });

        return () =>{
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT ,location.search]);

    useEffect(() =>{
        socket.on('message', (message) =>{
            setMessages([...messages, message]);
        });

    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();
        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    console.log(message, messages);

    return (
        <div className="wrap-chat">
            <div className="wrap-chat-container">
                <InfoBar room={room} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    );
};

export default Chat;
