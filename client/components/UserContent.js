import React, { Component } from 'react'
import {Tab,Tabs,Card} from '@blueprintjs/core'

export default class componentName extends Component {
  render() {
    return (
      <Card>
        <Tabs
            id="TabsExample"
            key={"horizontal"}>
                    <Tab id="rx" title="React" />
                    <Tab id="ng" title="Angular"/>
                    <Tab id="mb" title="Ember"/>
                    <Tab id="bb"  title="Backbone"/>
                    
                </Tabs>
      </Card>
    )
  }
}
