import React, {Component} from 'react'
import { withContext } from '../context';

import ProfileBanner from '../components/ProfileBanner';
import UserContent from '../components/UserContent';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(props)
        if(process.browser)
            props.fetchProfile(props.id)
    }
    static async getInitialProps({query}) {
        return {...query}
    }

    componentDidMount(){
        console.log(this.props)
      //  this.props.fetchProfile(this.props.id)
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
export default  withContext(DashBoard)
