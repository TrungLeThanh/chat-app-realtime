import React, {useState, useEffect, useRef} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages/Messages';
import TabBar from './TabBar';

let socket;

const Chat = ({location}) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    
    const ENDPOINT = 'ws://localhost:5000';

    useEffect(() =>{
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT, { transports: [ 'websocket','polling', 'flashsocket'] });

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room});

        return () => {
            socket.disconnect();
            socket.off();
        }

    }, [ENDPOINT ,location.search]);

    useEffect(() =>{
        socket.on('message', (message) =>{
            setMessages([...messages, message]);
        });

        socket.on("roomData", ({users }) => {
            setUsers(users);
        });

    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();
        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    // Scrool to bottom
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    };
    useEffect(scrollToBottom, [messages]);


    // console.log(message, messages);

    return (
        <div className="wrap-chat">
                
            <div className="chat-left">
                <TabBar users={users} room={room} />
            </div>
            <div className="chat-right">
                <InfoBar room={room} name={name} />
                <div className="chat-content">
                    <Messages messages={messages} name={name} />
                    <div ref={messagesEndRef} />
                </div>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    );
};

export default Chat;
