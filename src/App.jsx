import React, { Component } from "react";
import "./App.css";
import "./components/Input.css";
import CallMobxData from "./store/callmobxdata.js";
import Resultarea from "./components/display";
import {observer} from "mobx-react";
import { Button } from "./components/Button";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";


CallMobxData.GetNumber = function(value) {
  this.CalculatorNumber = value
}

CallMobxData.GetResult = function(value) {
  this.ResultDisplay = value
}

const App = observer(
class App extends Component {

  addToInput = val => {
    CallMobxData.CalculatorNumber.push(val)
    const aoperations_single = CallMobxData.CalculatorNumber.map((num) => num);
    CallMobxData.GetNumber(aoperations_single)
  };
  handleEqual = () => {
    let result = CallMobxData.CalculatorNumber.join('')
    if (result) {
      result = math.eval(result)
      CallMobxData.GetResult(result)
    } else {
      CallMobxData.GetResult(0)
    }
  };

  render() {

    return (
      <div className="app">
        <div className="calc-wrapper">
          <Resultarea data={CallMobxData.CalculatorNumber} resultdata={CallMobxData.ResultDisplay} />
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => CallMobxData.NumberClear()}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}
);
export default App;
