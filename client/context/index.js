import * as Profile from './ProfileContext';
import * as Auth from './AuthContext';
import React, {Component,createContext} from 'react'
const context = {
    "auth": Auth,
    "profile": Profile
}
const {Provider,Consumer}=createContext()

export default class Wrapper extends Component {

    static async getInitialProps(ctx) {
        let props = {}
        if (App.getInitialProps) {
            const pageProps = await App.getInitialProps(ctx)
            props = { ...props,...pageProps}
        }
        return props
    }
    handleState=this.setState.bind(this)
    constructor(props) {
        super(props)
        this.store=combine(Auth,Profile)(props)
        this.state=this.store.state

    }
    render() {
        let actions= mapActions(this.store.actions,this.state,this.handleState)
        let val={...this.store.actions,...this.state,...actions}
       
        return (<Provider value={val} >
             {this.props.children}
            </Provider>
        )
    }
}




export const withContext=Component=>{
    const Enhanced= props=>
        <Consumer>
        {(context)=>{
            console.log("store",context, Component)
          return  <Component {...props}{...context}/>
         }
        }
        </Consumer>
    Enhanced.getInitialProps= async(ctx)=> {
        if(Component.getInitialProps)
            return await Component.getInitialProps(ctx);
    }
    return Enhanced
}
function isPromise(value) {
    return(typeof value.then=="function")
}
const mapActions=(actions,state,setState)=>{
    return Object.keys(actions).reduce((finalActions,key)=>{
        return{
            ...finalActions,
            [key]:async(...args)=>{
                let result= actions[key](state,...args)
                if(isPromise(result)){
                    result.then(setState)
                    .catch(console.log)
                }
                else if(typeof result==="object"){
                    setState(result)
                }
            }
        }

    },{})
}
const combine=(...stores)=>(props)=>{
    return stores.reduce((store,{state,actions})=>{
        return{
            actions:{
                ...store.actions,
                ...actions
            },
            state:{
                ...store.state,
                ...state(props)
            }
        }
    },{})
}

