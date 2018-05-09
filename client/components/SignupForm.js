import React, { Component } from 'react'
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
export default class SignupForm extends Component {

    constructor(props){
        super(props)
    }

  render() {
    return (
      <div>
       <Dialog
          open={this.props.open}
        >
          <DialogTitle id="form-dialog-title">Signup</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <Grid container spacing="8" direction="column" alignItems="center" justify="space-between" >
            <Grid item xs >
            <Button  href="/auth/google" variant="raised" color="primary">
                Login With Google
            </Button>
            </Grid>
            <Grid item xs >
            <Button  href="/auth/google" variant="raised" color="primary">
                Login With Twitter
            </Button>
            </Grid>
            <Grid item xs >
            <Button  href="/auth/google" variant="raised" color="primary">
                        Login With Facebook
            </Button>
            </Grid>
            </Grid>


          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
        
      </div>
    )
  }
}
