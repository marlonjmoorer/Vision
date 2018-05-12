import React, {Component} from 'react'
import {withConsumer} from '../context/AuthContext';
import ProfileBanner from '../components/ProfileBanner';
import UserContent from '../components/UserContent';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.props.fetchUser()
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
export default withConsumer(DashBoard)
