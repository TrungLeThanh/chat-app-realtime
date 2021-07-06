import React from 'react';

const InfoBar = ({room}) => {

    return (
        <div style={{height: '60px', borderRadius: '0', width: '400px', position: 'fixed'}} className="ui blue inverted segment">
            <span>{room} <i className="fas fa-circle" style={{color: 'green'}}/></span>
        </div>
    );
};

export default InfoBar;