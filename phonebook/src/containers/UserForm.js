import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postUser } from '../actions'

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      nama: "",
      phone: ""
    }

    //this.handleidChange = this.handleidChange.bind(this);
    this.handlenamaChange = this.handlenamaChange.bind(this);
    this.handlephoneChange = this.handlephoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleidChange(event) {
    this.setState({ id: event.target.value });
  }

  handlenamaChange(event) {
    this.setState({ nama: event.target.value,id: event.target.value });
  }

  handlephoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.id && this.state.nama && this.state.phone) {
      this.props.postUser(this.state.id, this.state.nama, this.state.phone)
      this.setState({ id: "", nama: "", phone: "" });
    }
    event.preventDefault();
  }

  render() {
    return (


      <form onSubmit={this.handleSubmit}>
        <div>
          <p className="float-right">
            <button className="btn theme" type="button" data-toggle="collapse" data-target="#addForm" aria-expanded="false" aria-controls="addForm">
              <i className="fas fa-plus"></i> Add
                        </button>
            <button className="btn theme" style={{ marginLeft: "6px" }} onClick={this.handleButtonSearch} type="button" data-toggle="collapse" data-target="#searchForm" aria-expanded="false" aria-controls="searchForm">
              <i className="fas fa-search"></i> Search
                        </button>
          </p>
        </div>
        <div className="collapse container btn theme" id="addForm">
          <h5 className="" style={{ color: "white" }}>Add Contact</h5>
          {/* <div className=" theme btn">
            <input type="text" name="id" value={this.state.id} onChange={this.handleidChange} className="theme btn" style={{color:"white"}}placeholder="id Here" required />
          </div> */}
          <div className="theme btn">
            <input type="text" name="nama" value={this.state.nama} onChange={this.handlenamaChange} className="theme btn" placeholder="name Here" required />
          </div>
          <div className="theme btn">
            <input type="text" name="phone" value={this.state.phone} onChange={this.handlephoneChange} className="theme btn" placeholder="Phone Number Here" required />
          </div>
          <button type="submit" className="btn theme"> <i className="fas fa-save"></i> Save</button>
          <button type="button" onClick={this.handleButtonCancel} className="btn theme" data-toggle="collapse" data-target="#addForm" aria-expanded="false" aria-controls="addForm"><i className="fas fa-times"></i> Cancel</button>
        </div>


      </form >

    )
  }
}

const mapDispatchToProps = dispatch => ({
  postUser: (id, nama, phone) => dispatch(postUser(id, nama, phone))
})

export default connect(
  null,
  mapDispatchToProps
)(UserForm)