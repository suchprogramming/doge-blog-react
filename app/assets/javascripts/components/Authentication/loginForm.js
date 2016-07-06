// Vendor
import React from 'react';

// Material UI
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

// Local
import { addGrid } from '../Shared/gridWrapper';

const styles = {
  loginForm: {
    width: '300px',
    margin: 'auto'
  },
  innerFields: {
    textAlign: 'center'
  },
  button: {
    width: '100%'
  }
}

class LoginForm extends React.Component {

  render() {
    return (
      <Card style={styles.loginForm}>
        <CardTitle title="Sign In" />
        <div style={styles.innerFields}>
          <form method="post" action="/users/sign_in">
            <TextField
              id="user-email"
              floatingLabelFixed={true}
              floatingLabelText="E-Mail Address"
              type="text"
              name="user[email]"
            />
            <TextField
              id="user-password"
              floatingLabelFixed={true}
              floatingLabelText="Password"
              type="password"
              name="user[password]"
            />
            <CardActions>
              <FlatButton
                label="Sign In"
                type="submit"
                secondary={true}
                style={styles.button}
              />
            </CardActions>
            <input name="authenticity_token" type="hidden" value={this.props.csrf_token} />
          </form>
        </div>
      </Card>
    )
  }
}

export default addGrid(LoginForm)
