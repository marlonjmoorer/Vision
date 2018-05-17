import React, {Component} from 'react'
import { connect } from '../Context';
import ProfileBanner from '../components/ProfileBanner';
import UserContent from '../components/UserContent';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log("lo",props)
        // if(process.browser)
        //     props.fetchProfile(props.id)
    }
    static async getInitialProps({query,store}) {
        await store.dispatch("fetchProfile",query.id) 
        console.log("store",store) 
        return {profile: store.profile}
    }

    componentDidMount(){

     
    }
    render() {
        return (
        <div>
            <ProfileBanner profile={this.props.profile||{}}/>
            <UserContent/>
        </div>
        )
    }
}
export default  connect(Profile)
