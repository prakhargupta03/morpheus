import React, {Component} from 'react';
import Main from './Main';
import Transaction from './Transaction';
class App extends Component{
  render(){
    return(
      <div>
        <Transaction/>
        {/* <Main/> */}
      </div>
    );
  }
}
export default App;
