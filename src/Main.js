import React, {Component} from 'react';
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ClipboardIcon from 'react-clipboard-icon'
import AddButton from './add.png'
import {get} from 'axios';

class Main extends Component{
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
      dealTimeLeft:'7 months 6 days/ 306803 minutes',
      securityMoney:'',
      securitySender:'',
      securityReceiver:'',
      lockStatus:true,
      satisfiedStatus:true,
      dealDoneStatus:false,
      eth2inr:'',
      eth2usd:'',
      description:'Receiver has to provide me with a flat for 8 months at Satya nagar, Delhi from 1 jan 2018 to 1 august 2018.'
    }
    this.onContractDetailsCopyClick = this.onContractDetailsCopyClick.bind(this);
    this.onDealDetailsCopyClick = this.onDealDetailsCopyClick.bind(this);    
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=INR,USD')
    .then(({data})=>{
      this.setState({
        eth2inr:data.INR,
        eth2usd:data.USD
      })
    })
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.interval = setInterval(() => {
      get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=INR,USD')
      .then(({data})=>{
        this.setState({
          eth2inr:data.INR,
          eth2usd:data.USD
        })
      })
    }, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
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
    var sizeOfCol = 30
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
            <br/>
            <span style={{margin:'auto',background:'transparent',color:'white',padding:5,position:'relative',top:10}}>
              <i className="fas fa-info-circle" style={{marginRight:5,fontSize:20,}}></i>
              The Current Price of Ethereum is 
                <span style={{color:'#2C3335',fontSize:18,margin:'auto 5px'}}> ₹ {this.state.eth2inr} </span>
                 or 
                <span style={{color:'#2C3335',fontSize:18,margin:'auto 5px'}}> $ {this.state.eth2usd}</span>                  
            </span>
        </div>

        <div className="sender-receiver">
          <div>
            <span>Sender </span>
            <span style = {{background:'white', padding:5,marginLeft:10}}>
              {this.state.sender}
            </span>
          </div>
          <div>
            <span>Receiver </span>
            <span style = {{background:'white', padding:5,marginLeft:10}}>
              {this.state.receiver}
            </span>
          </div>
        </div>

        <div className="add-money">
          <div style={{flex:2,margin:8,minWidth:100}}>Total Balance:</div>
          <div style={{flex:5,minWidth:350,margin:'8px auto'}}>
            <input type="text" value={this.state.pgy} onChange={this.handleChange} name="pgy"/>
            PGY
          </div>
          <div style={{flex:5,minWidth:350,margin:"8px auto"}}>
           <input type="text" value={this.state.rupee} onChange={this.handleChange} name="rupee"/>
            ₹
          </div>
          <div style={{flex:2,margin:8,minWidth:100}}>
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
            <div className="deal-options1">
              <div style={{display:'flex'}}>
                <span style={{flex:2}}>
                  Security Deposit
                </span>
                <input style={{flex:5}} type="text" value={this.state.securityMoney} onChange={this.handleChange} name="securityMoney"/>
                <span style={{marginTop:10}}>₹</span>
              </div>
              <div style={{display:'flex'}}>
                <span style={{flex:2}}>
                  Sender
                </span>
                <input style={{flex:5}} type="text" value={this.state.securitySender} onChange={this.handleChange} name="securitySender"/>
                <img 
                  src={AddButton} 
                  alt="add sender money button"
                  style={{width:25,height:25,marginLeft:5,marginBottom:-12,cursor:'pointer'}}
                  onClick={()=>console.log('Add sender money button clicked')}
                />
              </div>
              <div style={{display:'flex'}}>
                <span style={{flex:2}}>
                  Receiver
                </span>
                <input style={{flex:5}} type="text" value={this.state.securityReceiver} onChange={this.handleChange} name="securityReceiver"/>
                <img 
                  src={AddButton} 
                  alt="add receiver money button"
                  style={{width:25,height:25,marginLeft:5,marginBottom:-12,cursor:'pointer'}}
                  onClick={()=>console.log('Add receiver money button clicked')}
                />
              </div>
              <button onClick={()=>console.log('Raise an Issue Button clicked')}>
                Cancel This Deal
              </button>
            </div>
            <div style={{width:5,height:230,background:'#fff',margin:'auto 5px',borderRadius:5}} className="hide1">
              <div style={{width:'100%',height:sizeOfCol+'%',background:'#FAC42F',borderRadius:5}}></div>
              <div style={{width:'100%',height:(100-sizeOfCol)+'%',background:'#FFF', borderRadius:5}}></div>
            </div>
            <div className="deal-options2">
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                <span>Locked</span>
                <span 
                  style={{background:'#25CCF7',padding:6,borderRadius:5,marginTop:-3,cursor:'pointer'}}
                  onClick={()=>{this.setState({lockStatus:!this.state.lockStatus})}}
                  >
                  Lock
                </span>
                <span>
                  {
                    this.state.lockStatus?
                    <i className="far fa-check-circle" style={{fontSize:25,color:'#019031'}}></i>:
                    <i className="fas fa-sync-alt rotating" style={{fontSize:25}}></i>           
                  }
                </span>
              </div>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                <span>Satisfied</span>
                <span 
                  style={{background:'#25CCF7',padding:6,borderRadius:5,marginTop:-3,cursor:'pointer'}}
                  onClick={()=>{this.setState({satisfiedStatus:!this.state.satisfiedStatus})}}
                  >
                  Satisfy
                </span>
                <span>
                  {
                    this.state.satisfiedStatus?
                    <i className="far fa-check-circle" style={{fontSize:25,color:'#019031'}}></i>:
                    <i className="fas fa-sync-alt rotating" style={{fontSize:25}}></i>           
                  }
                </span>
              </div>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                <span >Deal Done</span>
                <span 
                  style={{background:'#25CCF7',padding:6,borderRadius:5,marginTop:-3,width:55,cursor:'pointer'}}
                  onClick={()=>{this.setState({dealDoneStatus:!this.state.dealDoneStatus})}}
                  >
                  Claim Reward
                </span>
                <span>
                  {
                    this.state.dealDoneStatus?
                    <i className="far fa-check-circle" style={{fontSize:25,color:'#019031'}}></i>:
                    <i className="fas fa-sync-alt rotating" style={{fontSize:25}}></i>           
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <h3>
            Description
          </h3>
          <span>
            {this.state.description}
          </span>
        </div>
      </div>
    );
  }
}
export default Main;
