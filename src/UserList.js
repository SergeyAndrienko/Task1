import React from 'react';
import User from './User.js'
import UserInfo from './UserInfo.js'


export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: props.users,
            isUserInfoActive: false,
            currentUser: {}
        }
    }

    handleClick = (user) => {
        this.setState({currentUser: user, isUserInfoActive: true})
    }

    // renderUser = () => {
    //
    //     return JSON.stringify(this.state.currentUser)
    // };

    render() {
        return (
            <div className='wrap'>
                <ul>
                    {this.state.users.map(user => <User key={user.id} user={user} handleOnClick={this.handleClick}/>)}
                </ul>
                {/*<div className={this.state.isUserInfoActive ? "visible" : "invisible"}>*/}

                {/*    {this.renderUser()}*/}
                {/*</div>*/}
                {this.state.isUserInfoActive ? <UserInfo user={this.state.currentUser}/> : <></>}
            </div>
        )
    }
}