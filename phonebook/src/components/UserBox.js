import React, { Component } from 'react';
import UserList from '../containers/UserList';
import UserFormAdd from '../containers/UserFormAdd';

export default class UserBox extends Component {
  render() {
    return (
      <div>
        <div>
          <UserFormAdd />
        </div>
        <div className="container theme btn">
          <UserList />
        </div>
      </div>

    )
  }
}