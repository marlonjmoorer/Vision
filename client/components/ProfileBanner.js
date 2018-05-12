import React from 'react'
import { Button, Card, Elevation } from "@blueprintjs/core";
import { withConsumer } from '../context/AuthContext';
export default withConsumer(({user}) => {
  return (
    <Card interactive={true} elevation={Elevation.TWO}>
    <img  width="140" height="140" src="https://orig00.deviantart.net/e40f/f/2012/239/a/d/aang_facebook_default_profile_picture_by_redjanuary-d5cm82l.png"/>
    <h5><a href="#">Card heading</a></h5>
    <p>Card content</p>
    <Button>Submit</Button>
    </Card>
  )
})
