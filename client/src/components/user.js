import { Component } from 'react';

class Users extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch('/api/auth')
        .then(response => response.json())
        .then(response => {
        this.setState({users: response})
        console.log(response)})
    }

    render() {
        return (
            <ul>
                {this.state.users.map(user => (
                    <li>Username: {user.auth}</li>
                ))}
            </ul>
        )
    }
}
export default Users;