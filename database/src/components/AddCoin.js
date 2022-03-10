import React, { Component } from 'react';
import Coindata from '../services/Coindata';

class AddCoin extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            id:'',
            coin:'',
            ticker:'', 
            price:'',
            volume:''
        }
        this.idHandler=this.idHandler.bind(this);
        this.coinHandler=this.coinHandler.bind(this);
        this.tickerHandler=this.tickerHandler.bind(this);
        this.priceHandler=this.priceHandler.bind(this);
        this.volumeHandler=this.volumeHandler.bind(this);
    }
    idHandler=(event) =>{
        this.setState({
            id: event.target.value});
        }
    
    coinHandler=(event) =>{
        this.setState({
            coin: event.target.value});
        }
    tickerHandler=(event) =>{
            this.setState({
                ticker: event.target.value});
        }     
    priceHandler=(event) =>{
            this.setState({
                price: event.target.value});
        }
    volumeHandler=(event) =>{
            this.setState({
                volume: event.target.value});
        }

    saveCoin = (e) => {
        e.preventDefault();
        let coin={
            coin:this.state.coin,
            ticker:this.state.ticker,
            price:this.state.price,
            volume:this.state.volume
        };
        console.log(coin);
        console.log(this.props);
        Coindata.newCOINS(coin).then(res =>{
            this.props.navigate('/home');
        }).catch(err=>{
            console.log("Not saved",err);
        });
    }

    cancel(){
        this.props.navigate('/home');
    }
    
    render() {
        return( 
            <div>
                <div className="container">
                    <div className="card col-md6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Coin</h3>
                        <div className="card-body">
                            <form>
                                {/* <div className="form-group"> */}
                                    {/* <label>ID:</label> */}
                                    {/* <input placeholder="Id" name="id" className="form-control" */}
                                        {/* value={this.state.id} onChange={this.idHandler} /> */}
                                {/* </div> */}
                                <div className="form-group">
                                    <label>Coin:</label>
                                    <input placeholder="Coin" name="coin" className="form-control"
                                        value={this.state.coin} onChange={this.coinHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Ticker:</label>
                                    <input placeholder="Ticker" name="Ticker" className="form-control"
                                        value={this.state.ticker} onChange={this.tickerHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Price:</label>
                                    <input placeholder="Price" name="Price" className="form-control"
                                        value={this.state.price} onChange={this.priceHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Volume:</label>
                                    <input placeholder="Volume" name="Price" className="form-control"
                                        value={this.state.volume} onChange={this.volumeHandler} />
                                </div>
                                <button className="btn btn-success" onClick={this.saveCoin}> Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCoin;