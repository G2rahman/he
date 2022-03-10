import React, { Component } from 'react';
import Coindata from '../services/Coindata';

class ViewCoin extends Component {
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
     
        
        
    }//constructor

     componentDidMount()
     {
         //?
        Coindata.findByCoin(this.state.coin).then((res) =>{
            this.setState({coin:res.data})
         });
     }
     
    
     render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Update Student</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>ID: </label>
                                      <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
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

export default ViewCoin;