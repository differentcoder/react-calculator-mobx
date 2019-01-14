import React, { Component } from 'react'
class Resultarea extends Component {
  render() {
    const BeforeEqual = this.props.data.join('')
    const AfterEqual = this.props.resultdata

    return <div className="input">
     {BeforeEqual} <br/> {AfterEqual}  
     </div>
  }
}
export default Resultarea
