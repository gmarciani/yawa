import React from 'react';
import './Board.sass';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="BoardWrapper">
                <h2>Board</h2>
                <p>Welcome {this.props.user || "Unknown"}</p>
            </div>
        );
    }
}

export default Board;
