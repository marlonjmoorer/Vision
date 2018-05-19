import React, {Component} from 'react'
import ProfileBanner from '../components/ProfileBanner';
import UserContent from '../components/UserContent';
import api from '../api';
import { connectPage } from '../store';
import UpdateProfileForm from '../components/UpdateProfileForm';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false
        };

    }
    static async getInitialProps({query,store}) {
        let {data}=await api.get(`/api/users/${query.id}`).catch(err=>{
             console.log(err)
        })
        return {profile:data}
    }
    toggle=()=>this.setState(({open})=>({open:!open}))
    submit=(profile)=>{
        
        
    }
    render() {
        return (
        <div>
            <ProfileBanner profile={this.props.profile} toggle={this.toggle}/>
            <UserContent/>
            <UpdateProfileForm profile={this.props.profile} isOpen={this.state.open} toggle={this.toggle}/>
        </div>
        )
    }
}

export default  connectPage(Profile)
