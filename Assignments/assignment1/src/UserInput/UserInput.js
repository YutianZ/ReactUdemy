import React, { Component } from 'react';

class UserInput extends Component {
    render() {
        const style = {
            border: '1px solid',
            margin: '10px',
            borderRadius: '15%'
        }
        return (
            <input type='text' onChange={this.props.change} value={this.props.userName} style={style}></input>
        );
    }
}
export default UserInput;