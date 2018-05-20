import React from 'react'
import { Button, Card, Elevation } from "@blueprintjs/core";
//import { connect} from 'phaze';

import { Column, Row } from 'simple-flexbox';
export default ({profile,toggle}) => {
  const {photo}=profile
  let url="/static/avatar.png"
  let imgloading=false

  if(photo){
    if(process.browser){
      var blob = new Blob([new Uint8Array(photo.data)]);
      url=URL.createObjectURL(blob)
    }
    else{
      const binary=Buffer.from(photo).toString('base64')
      url= `data:image/png;base64,${binary}`;
    }
  }
  return (
    <Card className="banner" interactive={true} elevation={Elevation.TWO}>
      <Row>
        <Column flexGrow={1} horizontal="center"> 
          <img  width="140" height="140"  src={url}/> 
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
