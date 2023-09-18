import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';
import Memocomp from '../Memocomp';

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'leslie'
      }
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({
            name: 'leslie'
          });
        }, 2000);
      }

  render() {
    console.log('Parent comp render')
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
        <Memocomp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp