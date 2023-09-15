import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

  render() {

    return(
        this.state.isLoggedIn?
        <div>Welcome leslie</div> :
        <div>Welcome guest</div>
    )

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome leslie</div>
    // }else{
    //     message = <div>Welcome guest</div>
    // }

    // return <div>{message}</div>

    // if(this.state.isLoggedIn){
    //     return(
    //         <div>Welcome leslie</div>
    //     )
    // }else {
    //     return(
    //         <div>Welcome guest</div>
    //     )
    // }
    // return (
    //     <div>
    //          <div>Welcome Leslie</div>
    //          <div>Welcom guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting