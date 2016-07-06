// Vendor
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Material UI
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const addGrid = ComposedComponent => class extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: this.props.user_agent })}>
        <Grid>
          <Row>
            <Col lg={12}>
              <ComposedComponent {...this.props} />
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    )
  }
};
