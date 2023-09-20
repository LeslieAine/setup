import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {

    static contextType = UserContext

  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    )
  }
}

ComponentE.contextType = UserContext

export default ComponentE

// the superior way to use this is like the way it is reendered in component f