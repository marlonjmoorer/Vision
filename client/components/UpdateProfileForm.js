import {Dialog, Button, Intent, FormGroup, FileInput} from '@blueprintjs/core';
import {Column, Row} from 'simple-flexbox';
import React, {Component} from 'react'


export class UpdateProfileForm extends Component {

    state = {
        file: null,
        username:this.props.profile.username,
        about:this.props.profile.about
    }

    handleFile = ({target}) => {
        console.log(target.files)
        this.setState({file: target.files[0]})
    }
    handelchange=({target:{name,value}})=>this.setState({[name]:value})
    get url(){
        let {file} = this.state
        return file?URL.createObjectURL(file):""
    }

    render() {
        let {isOpen, toggle,profile,submit} = this.props
        let {file,username} = this.state
        return (
            <Dialog icon="refresh" isOpen={isOpen} onClose={toggle} title="Update Profile">
                <div className="pt-dialog-body">
                    <Row >
                        <Column flexGrow={1} horizontal="center">
                            <FormGroup label="Photo" labelFor="text-input">
                                <img
                                    width="140"
                                    height="140"
                                    src={this.url}/>
                            
                            </FormGroup>
                            <FormGroup  labelFor="text-input">
                              
                                <FileInput
                                    text={file
                                    ? file.name
                                    : "Choose file..."}
                                    onInputChange={this.handleFile}/>
                            </FormGroup>
                        </Column>
                        <Column flexGrow={1} horizontal="center">
                            <FormGroup label="Username" labelFor="text-input" requiredLabel={true}>
                                <input id="text-input" name="username" value={username} onChange={this.handelchange} placeholder="Placeholder text"/>
                            </FormGroup>
                            <FormGroup label="About" labelFor="text-input">
                                <textarea rows="5"></textarea>
                            </FormGroup>
                        </Column>
                    </Row>
                </div>
                <div className="pt-dialog-footer">
                    <div className="pt-dialog-footer-actions">
                        <Button text="Secondary" onClick={toggle}/>
                        <Button intent={Intent.PRIMARY} onClick={toggle} text="Primary"/>
                    </div>
                </div>
            </Dialog>
        )
    }
}

export default UpdateProfileForm
