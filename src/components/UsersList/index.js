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
            {this.state.users.map(user=> 
                <li>{user.firstName}</li>)}
        </ul>
    )
}
};

export default UsersList;

// class UserList extends React.Component{
//     state={
//         users:[]
//     };
//     componentDidMount(){
//     axios.get('http://exercises.getsandbox.com/users')
//     .then(res => {
//         this.setState({users:res.data});
//        // console.log(res.data);
//     });
// }
//         render(){
//             return(
//             <ul >
//            {this.state.users.map(user=><li style={{listStyleType: " none",lineHeight:2}}
// key={user.id}>{user.lastName},{user.firstName}</li>)}
//                 </ul>
//             )
//     };
    

 
    

// }

// export default UserList;