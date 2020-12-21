import React, { Component } from 'react';
import User from './UserActive';
import { connect } from 'react-redux';
import { loadUser } from '../actions'
import EditForm from './UserFormEdit'

class UserList extends Component {

  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    const nodes = this.props.users.map((item, index) => {
      return  item.isEditing ? (
        <EditForm
          key={index}
          //index={this.props.page === 1 ? index + 1 : (this.props.page - 1) * 5 + (index + 1)}
          id={item.id}
          nama={item.nama}
          phone={item.phone}
          sent={item.sent}
          edit={item.isEditing}
        />
      )
      :(
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
    // nama={item.nama}
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
  users: state.users.users
})

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)