import React, { Component } from 'react'

// import { useHistory } from "react-router-dom"

import UserService from './UserService'

const userService = new UserService()


class UserCreate extends Component {

    constructor(props) {
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.firstName = React.createRef();
      this.lastName = React.createRef();
      this.password = React.createRef();
      this.address = React.createRef();
      this.contact_number = React.createRef();
      this.email = React.createRef();
    }

    componentDidMount(){

      const { match: { params } } = this.props;
      if(params && params.id)
      {
          userService.getUser(params.id).then((c)=>{            
            this.firstName.value = c.first_name
            this.lastName.value = c.last_name
            this.password.value = c.password
            this.address.value = c.address
            this.contact_number.value = c.contact_number
            this.email.value = c.email          
        })
      }
    }
    
    handleCreate(firstName, lastName, password, contact_number, email, address){
      // const history = useHistory()
      userService.createUser(
            {              
              "first_name": firstName, // this.firstName.value,
              "last_name": lastName, // this.lastName.value,
              "password": password,
              "address": address, // this.address.value,
              "contact_number": contact_number, // this.contact_number.value,
              "email": email, // this.email.value,
            }).then((result) => {
                alert("Customer created")                
            }).catch(() =>{
                alert("There was error! Please re-check your form.")
            })
      this.props.history.push("/")
    }

    handleSubmit(event) {
      event.preventDefault()      
      const { match: { params } } = this.props
      if (params && params.id) {
          this.handleUpdate(params.id)
      }
      else{
        this.handleCreate(
          event.target.firstName.value, event.target.lastName.value, 
          event.target.password.value, event.target.contact_number.value, 
          event.target.email.value, event.target.address.value
          )          
      }
      // event.preventDefault()
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              First Name:</label>
              <input className="form-control" name='firstName' type="text" value={ this.state.value } ref={this.firstName } />

            <label>
              Last Name:</label>
              <input className="form-control" name='lastName'  type="text" ref={this.lastName}/>

            <label>
            Password:</label>
            <input type="password" className="form-control" name='password' ref={this.password}/>

            <label>
              Phone:</label>
              <input className="form-control" name='contact_number'  type="text" ref={this.contact_number} />

            <label>
              Email:</label>
              <input className="form-control" name='email'  type="text" ref={this.email} />

            <label>
              Address:</label>
              <input className="form-control" name='address'  type="text" ref={this.address} />

            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
  }
}

export default UserCreate