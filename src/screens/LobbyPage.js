import React from 'react';
import ReactDOM from 'react-dom';
import Room from './views/room.ejs';

function LobbyPage() {
    return (
        <div>
            <Room/>
        </div>
    );
}

ReactDOM.render(
    <LobbyPage/>,
    document.getElementById('root')
);

export default LobbyPage;
