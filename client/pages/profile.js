import React, {Component} from 'react'
import {authGuard} from '../context/AuthContext';
import { withConsumer } from '../context/ProfileContext';

import ProfileBanner from '../components/ProfileBanner';
import UserContent from '../components/UserContent';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(props)
        props.fetchProfile(props.id)
    }
    componentDidMount(){
        console.log(this.props)
        this.props.fetchProfile(this.props.id)
    }
    render() {
        return (
        <div>
            <ProfileBanner/>
            <UserContent/>
        </div>
        )
    }
}
export default  authGuard(withConsumer(DashBoard))
