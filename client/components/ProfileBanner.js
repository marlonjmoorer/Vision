import React from 'react'
import { Button, Card, Elevation } from "@blueprintjs/core";
import { connect} from '../Context';

import { Column, Row } from 'simple-flexbox';
export default ({profile,toggle}) => {
  return (
    <Card className="banner" interactive={true} elevation={Elevation.TWO}>
      <Row>
        <Column flexGrow={1} horizontal="center"> 
          <img  width="140" height="140"  src="https://orig00.deviantart.net/e40f/f/2012/239/a/d/aang_facebook_default_profile_picture_by_redjanuary-d5cm82l.png"/> 
          <p>Card content</p>
        </Column>
        <Column flexGrow={4} vertical="center" >
            <h2><a href="#">{`${profile.displayName}@${profile.username}`}</a></h2>
            <div>
                <Button onClick={toggle} >Update Profile</Button> 
            </div>    
        </Column>
      </Row>
    </Card>
  )
}
