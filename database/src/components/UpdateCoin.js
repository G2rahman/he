import React, { Component } from 'react';
import Coindata from '../services/Coindata';
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return (props)=>{
      const match ={params: useParams() };
       return <Children {...props} match = {match} />
    }
}
class UpdateCoin extends React.Component {
//class UpdateCoin extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 coin:'',
                 ticker:'',
                 price:'',
                 volume:''
             }
            
   //     this.idHandler = this.idHandler.bind(this);
     //   this.coinHandler = this.coinHandler.bind(this);
    //    this.tickerHandler = this.tickerHandler.bind(this);
   //     this.updateCoin = this.updateCoin.bind(this);

       // this.idHandler=this.idHandler.bind(this);
        //this.coinHandler=this.coinHandler.bind(this);
     //   this.tickerHandler=this.tickerHandler.bind(this);
     //   this.priceHandler=this.priceHandler.bind(this);
     //   this.volumeHandler=this.volumeHandler.bind(this);

    }//constructor

     componentDidMount()
     {
        Coindata.findById(this.state.id).then((res) =>{
          let coin = res.data;
          this.setState({name:coin.name,
                  ticker:coin.ticker,
                  price:coin.price,
                  volume:coin.volume
                });
        });
     }
     
    idHandler=(event) => {
        this.setState({
             id: event.target.value});
    }

    nameHandler=(event) => {
        this.setState({
           name: event.target.value});
    }

   tickerHandler=(event) => {
        this.setState({
             ticker: event.target.value});
    }
    priceHandler=(event) => {
        this.setState({
             price: event.target.value});
    }
    volumeHandler=(event) => {
        this.setState({
             volume: event.target.value});
    }

   updateCoin = (e) => {
        e.preventDefault();
        let coin={
           id: this.state.id,
           name: this.state.name,
           ticker:  this.state.ticker,
           price: this.state.price,
           volume: this.state.volume
        };
        
        Coindata.updateCoin(coin,this.state.id).then((res) => {
            this.props.navigate('/home');
        });
      
        
    }

    cancel(){
        this.props.navigate('/home');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Update Coin</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>ID: </label>
                                      <input placeholder={this.state.id} readOnly name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Coin: </label>
                                      <input placeholder="coin" name="coin" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Ticker: </label>
                                      <input placeholder="ticker" name="ticker" className="form-control"
                                         value={this.state.ticker} onChange={this.tickerHandler} />
                                   </div> 
                                   <div>
                                   <label>Price: </label>
                                      <input placeholder="price" name="grade" className="form-control"
                                         value={this.state.price} onChange={this.priceHandler} />
                                    </div>  
                                    <div>
                                    <label>Volume: </label>
                                      <input placeholder="volume" name="volume" className="form-control"
                                         value={this.state.volume} onChange={this.volumeHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateCoin}> Update </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

//export default UpdateCoin;
export default withRouter(UpdateCoin);

