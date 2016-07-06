require('babel-polyfill');

// React tap event plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Authentication
window.LoginForm = global.LoginForm = require("./components/Authentication/loginForm").default

// Main Navigation
window.MainNav = global.MainNav = require("./components/Nav/mainNav").default
