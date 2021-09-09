import React from 'react';
import './Board.sass';

class Board extends React.Component {

    render() {
        return (
            <div className="BoardWrapper">
                <h2>Board</h2>
                <p>Data for user: {this.props.user || "Unknown"}</p>
            </div>
        );
    }
}

export default Board;
