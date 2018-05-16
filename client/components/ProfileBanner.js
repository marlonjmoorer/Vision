import React from 'react'
import { Button, Card, Elevation } from "@blueprintjs/core";
import { withContext } from '../context';

import { Column, Row } from 'simple-flexbox';
export default   withContext((props) => {
  console.log("profile",props)
  return (
    <Card className="banner" interactive={true} elevation={Elevation.TWO}>
      <Row>
        <Column style={{marginLeft:"90px"}}> 
          <img  width="140" height="140"  src="https://orig00.deviantart.net/e40f/f/2012/239/a/d/aang_facebook_default_profile_picture_by_redjanuary-d5cm82l.png"/> 
          <p>Card content</p>
        </Column>
        <Column vertical="center" style={{marginLeft:"9px"}}>
            {/* <h2><a href="#">{`${profile.displayName}@${profile.username}`}</a></h2> */}
            <Button>Update Profile</Button>
        </Column>
      </Row>
    </Card>
  )
})
