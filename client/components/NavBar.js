import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import SignupForm from './SignupForm';
import { withConsumer } from '../context/AuthContext';

export default  withConsumer((props) => {
  console.log(props)
  return (
    <div className="bar">
     <AppBar position="static" color="default">
        <Toolbar>
          <Typography className="title" variant="title" color="inherit">
            Title
          </Typography>
          <Button color="inherit">Signup</Button>
          <Button color="inherit">Login</Button>
          <SignupForm open={true}/>
        </Toolbar>
      </AppBar>
    </div>
  )
})
