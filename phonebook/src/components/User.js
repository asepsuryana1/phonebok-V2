import React from 'react';

const User = (props) => {
  return (
    <tr>
      <th>{props.index}</th>
      <th>{props.nama}</th>
      <th>{props.phone}</th>
      <td style={{textAlign:'center'}}>{props.sent
        ? (<button style={{marginRight:'6px'}}type="button" className="btn theme" onClick={props.onDelete}><i className="fas fa-trash"></i> Delete</button>)

        : (<button type="submit" className="btn theme" onClick={props.onResend}><i className="fas fa-sync-alt"></i>Resend</button>)
      }
        <button type="button" className="btn theme" onClick={props.onUpdateUser}><i className="fas fa-pencil-alt"></i> Update </button>
      </td>
      {!props.sent &&
        <td style={{ color: "red", fontSize: "8px" }}>
          network failed, please check your connections
        </td>
      }
    </tr>
  )
}

export default User;