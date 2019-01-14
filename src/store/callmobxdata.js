import {action, observable, decorate} from "mobx";
    
    class CallMobxData {
      CalculatorNumber = []
        ResultDisplay = []
      
        NumberClear() {
          this.CalculatorNumber = []
          this.ResultDisplay = []
        }
      }
      
      decorate( CallMobxData, {
        CalculatorNumber: observable,
        ResultDisplay: observable,
        NumberClear : action,
      });
    
    export default new CallMobxData();