import { connect } from 'react-redux'
import { deleteUser, resendUser, onUpdateUser } from '../actions'
import User from '../components/User'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(deleteUser(ownProps.id)),
  resend: () => dispatch(resendUser(ownProps.id, ownProps.nama, ownProps.phone)),
  onUpdateUser: () => dispatch(onUpdateUser(ownProps.id))
})


export default connect(
  null,
  mapDispatchToProps
)(User)