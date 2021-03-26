import axios from 'axios';
import React from 'react';
// import ReactDOM from 'reactDom';
// import axios from 'axios';
// import ReactDOM from 'react-dom';


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
    };

// Traversing the users list to fetch last name, first name
render(){
     return(
// If the users arra is empty then the page displas loading(as the axios.get is fetching data)
        <ul>
            <h2>List of users:</h2>
            {this.state.users.length ? (this.state.users.map(user=> 
        <li key={user.id} style={{listStyleType:"none", marginLeft:"50px", lineHeight:"2em"}}>{user.lastName},{user.firstName}</li>)): "Loading..."}
        </ul>
    )
}
};

export default UsersList;
