import React, { Component } from 'react';
import User from './UserActive';
import { connect } from 'react-redux';
import { loadUser } from '../actions'

class UserList extends Component {

  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    const nodes = this.props.users.map((item, index) => {
      return (
        <User
          key={index}
          id={item.id} index={index + 1}
          nama={item.nama}
          phone={item.phone}
          sent={item.sent}
        />)
    })
    // <Phone
    // key={index}
    // id={item.id} index={index + 1}
    // Name={item.Name}
    // Number={item.Number}
    // sent={item.sent} />
    return (
      <div className="container theme">
        <br></br>
        <table className="table">
          <thead >
            <tr>
              <th >#</th>
              <th style={{ textAlign: 'left',width: '25%' }}>Nama</th>
              <th style={{ textAlign: 'left',width: '25%' }}>No.Telp</th>
              <th style={{ textAlign: 'center', width: '40%' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {nodes}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)