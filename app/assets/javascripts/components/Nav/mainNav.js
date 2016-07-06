// Vendor
import React from 'react';

// Material UI
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Local

import LogOutForm from '../Authentication/logOutForm';

const styles = {
  nav: {
    alignItems: 'center',
    marginBottom: '20px'
  },
  button: {
    color: '#fff'
  },
  title: {
    color: '#fff',
    textDecoration: 'none'
  }
}

const nonAuthLinks = [
  <FlatButton
    labelStyle={styles.button}
    key={1}
    linkButton={true}
    href="/users/sign_in" label="Log In"
  />,
  <FlatButton
    labelStyle={styles.button}
    key={2}
    linkButton={true}
    href="/users/sign_up"
    label="Sign Up"
  />
]

const authLinks = (props) => {
  return (
    <div style={{display: 'flex'}}>
      <LogOutForm csrfToken={props.csrf_token} />
      <FlatButton
        labelStyle={styles.button}
        key={2}
        linkButton={true}
        href="/users/edit/"
        label="My Profile"
      />
    </div>
  )
}

const MainNav = (props) => {

  const navItems = props.current_user ? authLinks(props) : nonAuthLinks

  return (
    <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: props.user_agent })}>
      <AppBar
        style={styles.nav}
        children={navItems}
        showMenuIconButton={false}
        title={<a style={styles.title} href="/">The Doge Blog</a>}
      />
    </MuiThemeProvider>
  )
}

export default MainNav;
