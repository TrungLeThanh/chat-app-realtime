import React from 'react';
import './TabBar.css';

const TabBar = ({room, users}) => {
    return (
        <div className="wrap-bar">
            <h3>{room.toUpperCase()}</h3>
            <hr style={{width: '90%'}} />
            <div className="name" style={{marginTop: '15px'}}>
                <p>Members ({users.length})</p>
                {
                    users.map((user) => {
                        return (
                            <div className="ui feed" key={user.id}>
                                <div className="event">
                                    <div className="label">
                                        <b style={{fontSize: '10px'}} className="ui circular label">{user.name.charAt(0).toUpperCase()}</b>
                                    </div>
                                    {user.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TabBar;
