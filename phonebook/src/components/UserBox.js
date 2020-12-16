import React, { Component } from 'react';
import UserList from '../containers/UserList';
import UserForm from '../containers/UserForm';

export default class UserBox extends Component {
  render() {
    return (
      <div>
        <div>
          <UserForm />
        </div>
        <div className="container theme btn">
          <UserList />
        </div>
      </div>

    )
  }
}