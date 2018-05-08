import React from 'react'
import {AppBar,Toolbar,Typography} from 'material-ui'

export default () => {
  return (
    <div>
     <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
