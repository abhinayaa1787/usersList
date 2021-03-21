import React from 'react';
import axios from 'axios';

class UsersList extends React.Component{
    // Setting state for the component
    state={
        users:[]
    }
componentDidMount(){
    // Fetching users from an endpoint 
    axios.get('http://exercises.getsandbox.com/users')
        .then(res=>
           this.setState({users:res.data}))
        .catch(error => {
            console.log(error);
        })
    }

// Traversing the users list to fetch last name, first name
render(){
    return(
        <ul>
            <h2>List of users:</h2>
            {this.state.users.map(user=> 
                <li key={user.id} style={{listStyleType:"none", marginLeft:"50px", lineHeight:"2em"}}>{user.lastName},{user.firstName}</li>)}
        </ul>
    )
}
};

export default UsersList;


 
