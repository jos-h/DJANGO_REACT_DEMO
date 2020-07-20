import React, { Component } from 'react'
import UserService from './UserService'

const userService = new UserService()

class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            nextPageURL: ''
        }
        // this.nextPage = this.nextPage.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }


    componentDidMount () {
        let currentComponent = this;
        userService.getUsers().then(function (result) {
            let tmpArray = []
            for (var i = 0; i < result.length; i++) {
                tmpArray.push(result[i])
            }
            currentComponent.setState({
                users: tmpArray
            })
        });
    }

    handleDelete(event, pk){
        let currentComponent = this;
        userService.deleteUser(pk).then(() => {
            var newArr = currentComponent.state.users.filter(function(obj){
                return obj.pk !== pk;
            });
            currentComponent.setState({
                customers: newArr})
        });
    }

    handleUpdate(event, pk){
        // let currentComponent = this;
        // contenteditable="true"
        userService.getUser(pk).then((c)=>{            
            this.firstName.value = c.first_name
            this.lastName.value = c.last_name
            this.password.value = c.password
            this.address.value = c.address
            this.contact_number.value = c.contact_number
            this.email.value = c.email          
        })
    }


    render (){
        return (
            <div  className="users-list">
                <table className="table">
                    <thead key="thead">
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map( c  =>
                        <tr key={ c.id }>
                            <td>{c.id}</td>
                            <td>{c.first_name}</td>
                            <td>{c.last_name}</td>
                            <td>{c.contact_number}</td>
                            <td>{c.email}</td>
                            <td>{c.address}</td>
                            <td>
                            <button className="btn btn-sm btn-primary" onClick={(e)=>  this.handleDelete(e,c.id) }> Delete </button>
                            &nbsp;&nbsp;&nbsp;
                            <button className="btn btn-sm btn-primary" onClick={(e)=>  this.handleUpdate(e,c.id) }> Update </button>

                            {/* <a className="btn btn-secondary btn-sm active" role="button" aria-pressed="true" href={"/users/" + c.id} > Update </a> */}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
            </div>
            );
    }
}

export default UserList;

