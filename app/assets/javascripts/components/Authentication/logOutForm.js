// Vendor
import React from 'react';

// Material UI
import FlatButton from 'material-ui/FlatButton';

const logOutForm = (props) => {
  return (
    <form method="post" action="/users/sign_out">
      <input type="hidden" name="_method" value="delete" />
      <input name="authenticity_token" type="hidden" value={props.csrfToken} />
      <FlatButton labelStyle={{color: '#fff'}} label="Log Out" type="submit" />
    </form>
  )
}

export default logOutForm
