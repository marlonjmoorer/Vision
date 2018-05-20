import {Dialog, Button, Intent, FormGroup, FileInput, Tag} from '@blueprintjs/core';
import {Column, Row} from 'simple-flexbox';
import React, {Component} from 'react'

export class UpdateProfileForm extends Component {

    state = {
            file: this.props.photo,
            displayName:this.props.profile.displayName,
            about:this.props.profile.about||""
    }

    handleFile = ({target}) => {
        console.log(target.files)
        this.setState({file: target.files[0]})
    }
    handelchange=({target:{name,value}})=>this.setState({[name]:value})
    send=()=>{
        const form=new FormData()
        form.append("file",this.state.file)
        form.append("displayName",this.state.displayName)
        form.append("about",this.state.about)
        this.props.submit(form)
    }
    get url(){
        let {file} = this.state
        return file?URL.createObjectURL(file):"/static/avatar.png"
    }

    render() {
        let {isOpen, toggle,profile,submit} = this.props
        let {file,displayName,about} = this.state
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
                              {file? <Tag intent={Intent.PRIMARY} onRemove={e=>{this.setState({file:null})}}>
                                    {file.name}
                                    </Tag>:
                                <FileInput
                                    text="Choose a file..."
                                    onInputChange={this.handleFile}/>}
                            </FormGroup>
                        </Column>
                        <Column flexGrow={1} horizontal="center">
                            <FormGroup label="Username" labelFor="text-input" requiredLabel={true}>
                                <input id="text-input" name="displayName" value={displayName} onChange={this.handelchange} placeholder="Placeholder text"/>
                            </FormGroup>
                            <FormGroup label="About" labelFor="text-input">
                                <textarea rows="5" name="about" value={about} onChange={this.handelchange}></textarea>
                            </FormGroup>
                        </Column>
                    </Row>
                </div>
                <div className="pt-dialog-footer">
                    <div className="pt-dialog-footer-actions">
                        <Button text="Secondary" onClick={toggle}/>
                        <Button intent={Intent.PRIMARY} onClick={this.send} text="Primary"/>
                    </div>
                </div>
            </Dialog>
        )
    }
}

export default UpdateProfileForm
