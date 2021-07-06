import React from 'react';
import {Link} from 'react-router-dom';

const InfoBar = ({ room, name }) => {

    return (
        <div style={{borderRadius: '0', height: '65px', display: 'flex', justifyContent: 'space-between'}} className="ui blue inverted segment">
            <p>{room} <br /> {name} &nbsp;<i className="fas fa-circle" style={{color: 'green', fontSize: '10px'}}/></p>
            <Link to='/' style={{lineHeight: '10px', marginTop: '5px'}} className="ui google plus button">Leave</Link>
        </div>
    );
};

export default InfoBar;