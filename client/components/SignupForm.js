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
       this. state={url:null}
    }

    
    authenticate=(provider)=> {
        window.authenticateCallback = function(token) {
           
            console.log(token)
        };
        window.addEventListener('message', function (event) {
           console.log(event)
        }, false);
        window.open('http://localhost:3500/auth/' + provider);
        this.setState({url:'http://localhost:3500/auth/' + provider})
          
    }

    render() {
        
        return (
        <div>
       
        <Dialog open={this.props.open}>
            <DialogTitle id="form-dialog-title">Signup</DialogTitle>
            <DialogContent>
                <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send
                updates occasionally.
                </DialogContentText>
                <Grid container spacing={8} direction="column" alignItems="center" justify="space-between" >
                <Grid item xs >
                <Button  onClick={e=>this.authenticate("google")} variant="raised" color="primary">
                    Login With Google
                </Button>
                </Grid>
                <Grid item xs >
                <Button  href="/auth/twitter" variant="raised" color="primary">
                    Login With Twitter
                </Button>
                </Grid>
                <Grid item xs >
                <Button  href="/auth/google" variant="raised" color="primary">
                            Login With Facebook
                </Button>
                </Grid>
                </Grid>

 <iframe src="http://localhost:3500/auth/google" height="400" width="400"/>
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
