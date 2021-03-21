import React from 'react';
import axios from 'axios';

class UsersList extends React.Component{
    state={
        users:[]
    }
componentDidMount(){
    axios.get('http://exercises.getsandbox.com/users')
        .then(res=>
           this.setState({users:res.data}) );
}

render(){
    return(
        <ul>
            <h2>List of users:</h2>
            {this.state.users.map(user=> 
                <li>{user.lastName},{user.firstName}</li>)}
        </ul>
    )
}
};

export default UsersList;


 
