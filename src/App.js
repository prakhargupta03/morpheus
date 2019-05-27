import React, {Component} from 'react';
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ClipboardIcon from 'react-clipboard-icon'
import AddButton from './add.png'
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      contractDetails:'0xLl4HpWb2q7ZAqvPNMSfzXpdnTmJIU3',
      contractDetailsCopy:false,
      sender:'0xLl4HpWb2q7ZAqvPNMSfzXpdnTmJIU3',
      receiver:'0xLl4HpWb2q7ZAqvPNMSfzXpdnTmJIU3',
      pgy:'',
      rupee:'',
      dealToken:'0xLl4HpWb2q7ZAqvPNMSfzXpdnTmJIU3',
      dealTopic:'Flat for Rent',
      dealDuration:'8 months',
      dealDetailsCopy:false,
      dealTimeLeft:'7 months 6 days/ 306803 minutes'
    }
    this.onContractDetailsCopyClick = this.onContractDetailsCopyClick.bind(this);
    this.onDealDetailsCopyClick = this.onDealDetailsCopyClick.bind(this);    
    this.handleChange = this.handleChange.bind(this);
  }
  onContractDetailsCopyClick(){
    this.setState({contractDetailsCopy: true});
    console.log('Copy to clipboard Contract details')
    setTimeout(()=>{this.setState({contractDetailsCopy:false})},2000);
  }
  onDealDetailsCopyClick(){
    this.setState({dealDetailsCopy: true});
    console.log('Copy to clipboard Deal details')
    setTimeout(()=>{this.setState({dealDetailsCopy:false})},800);
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    return (
      <div className="App">
        <div className="top-section">
            <span style={{fontSize:20}}>Contact Details</span>
            <br/>
            {this.state.contractDetails}
            <CopyToClipboard text={this.state.contractDetails}
              onCopy={this.onContractDetailsCopyClick}>
              <ClipboardIcon
                size={20}
                style={{marginLeft:8,cursor:'pointer'}}
                title='Copy'
              />
            </CopyToClipboard>
            {this.state.contractDetailsCopy&&<span style={{marginLeft:8,color:"black"}}>Copied</span>}
        </div>

        <div className="sender-receiver">
          <div>
            Sender
            <span style = {{background:'white', padding:5,marginLeft:10}}>
              {this.state.sender}
            </span>
          </div>
          <div>
            Receiver
            <span style = {{background:'white', padding:5,marginLeft:10}}>
              {this.state.receiver}
            </span>
          </div>
        </div>

        <div className="add-money">
          <div style={{flex:2,margin:8}}>Total Balance:</div>
          <div style={{flex:5}}>
            <input type="text" value={this.state.pgy} onChange={this.handleChange} name="pgy"/>
            PGY
          </div>
          <div style={{flex:5}}>
           <input type="text" value={this.state.rupee} onChange={this.handleChange} name="rupee"/>
            ₹
          </div>
          <div style={{flex:2,margin:8}}>
            Add Money
            <img 
              src={AddButton} 
              alt="add button"
              style={{width:40,height:40,marginLeft:5,marginBottom:-12,cursor:'pointer'}}
              onClick={()=>console.log('Add money button clicked')}
            />
          </div>
        </div>

        <div className="deal">
          <div className="issue">
            <div>
              Deal
              <span style={{background:'#99AAAB',margin:10,padding:5,borderRadius:5}}>
                {this.state.dealToken}
              </span>
              <CopyToClipboard text={this.state.dealToken}
              onCopy={this.onDealDetailsCopyClick}>
              <ClipboardIcon
                size={20}
                style={{marginLeft:8,cursor:'pointer'}}
                title='Copy'
              />
              </CopyToClipboard>
              {this.state.dealDetailsCopy&&<span style={{marginLeft:8,color:"black"}}>Copied</span>}
            </div>
            <div style={{display:'flex'}}>
              <span style={{flex:2}}>Topic:</span>
              <span style={{flex:3}}>{this.state.dealTopic}</span>
            </div>
            <div style={{display:'flex'}}>
              <span style={{flex:2}}>Deal Duration:</span>
              <span style={{flex:3}}>{this.state.dealDuration}</span>
            </div>
            <div style={{display:'flex'}}>
              <span style={{flex:2}}><i className="fas fa-hourglass-half"></i>  Left:</span>
              <span style={{flex:3}}>{this.state.dealTimeLeft}</span>
            </div>
            <button onClick={()=>console.log('Raise an Issue Button clicked')}>
              Raise an Issue 
              <i style={{marginLeft:5}} className="fas fa-exclamation-triangle"></i>
            </button>
          </div>
          <div className="deal-options">
            
          </div>
        </div>
      </div>
    );
  }
}
export default App;
