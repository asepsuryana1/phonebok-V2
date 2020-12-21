import React, { Component } from 'react';

import { connect } from 'react-redux';

import { offUpdateUser, updateUser } from '../actions';

class EditForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nama: this.props.nama,
            phone: this.props.phone
        }
        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.nama]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Submit Button');
        if (this.state.nama && this.state.phone) {
            this.props.updateUser(this.state.nama, this.state.phone);
        } else {

            // swall Edit User

        }
    }

    handleCancel(event) {
        console.log('Cancel Button');
        this.setState({
            nama: this.props.nama,
            phone: this.props.phone
        })
        this.props.offUpdateUser()
    }

    render() {
        return (
            <tr>
                
                    <td >{this.props.index}</td>
                

                <td>
                    
                        <form className="form-row" onSubmit={this.handleSubmit}>
                            <input type="text" className="form-control" name="nama" value={this.state.nama} onChange={this.handleChange} required={true} />
                        </form>
                    
                </td>

                <td>
                
                        <form className="form-row" onSubmit={this.handleSubmit}>
                            <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} required={true} />
                        </form>
                  
                </td>

                <td>
                    <button type="submit" className="btn btn-success  mr-2" onClick={this.handleSubmit}><i className="fas fa-check"></i> Save</button>

                    <button type="button" className="btn btn-warning " onClick={this.handleCancel}><i className="fas fa-times"></i> Cancel</button>
                </td>
            </tr>

        )
    }
}

const mapDispatchToProps = (dispatch, ownProps ) => ({
    offUpdateUser: () => dispatch(offUpdateUser(ownProps.id)),
    updateUser: (nama, phone) => dispatch(updateUser(ownProps.id, nama, phone))
})

export default connect(
    null,
    mapDispatchToProps
)(EditForm)
