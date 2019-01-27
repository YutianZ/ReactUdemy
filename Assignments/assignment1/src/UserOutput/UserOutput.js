import React, { Component } from 'react';
import './UserOutput.css';
class UserOutput extends Component {
    render() {
        return (
            <div className='UserOutput'>
                <p>First paragraph shows username: {this.props.userName}.</p>
                <p>Second paragraph shows props.children: {this.props.children}</p>
            </div>
        );
    }
}

export default UserOutput;