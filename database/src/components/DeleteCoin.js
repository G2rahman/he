import React, {Component} from 'react';
import Coindata from '../services/Coindata';
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{
  
      const match  = {params: useParams()};
      return <Children {...props}  match = {match}/>
  }
  }

class DeleteCoin extends React.Component {
//class DeleteCoin extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            id:this.props.match.params.id,
           //id:this.props.match.id,
            coin:this.props.coin,
            ticker:this.props.ticker,
            price:this.props.price,
            volume:this.props.volume,
        }
        this.deleteCoin=this.deleteCoin.bind(this);
    }
    componentDidMount()
    {console.log(this.props);
        console.log(this.state);
        Coindata.findById(this.state.id).then((res)=>{
            let coin=res.data;
            this.setState({coin:coin.coin,
                ticker:coin.ticker,
                price:coin.price,
                volume:coin.volume
            });
        });
        }
deleteCoin = (e) => {
    e.preventDefault();
    let coin={
        id:this.state.id,
        coin:this.state.coin,
        ticker:this.state.ticker,
        price:this.state.price,
        volume:this.state.volume,
    };
  //  console.log(this.state.id,err);
    console.log(coin);
    Coindata.deleteById(this.state.id).then(res => {
        this.props.navigate('/home');
        console.log("deleted");
    })
}
cancel(){
    this.props.navigate('/home');
}

render() {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Delete Coin</h3>
                        <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>ID: </label>
                                      <input placeholder="Id" readOnly name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Coin: </label>
                                      <input placeholder="Coin" readOnly name="name" className="form-control"
                                         value={this.state.coin } onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Ticker: </label>
                                      <input placeholder="Ticker" readOnly name="ticker" className="form-control"
                                         value={this.state.ticker} onChange={this.gradeHandler} />
                                   </div>   
                                   <div className="form-group">
                                       <label>Price:</label>
                                       <input placeholder="Price" readOnly name="price" className="form-control"
                                            value={this.state.price} onChange={this.gradeHandler} />
                                   </div>
                                   <div className="form-group">
                                   <label>Volume:</label>
                                   <input placeholder="Volume" readOnly name="volume" className="form-control"
                                            value={this.state.volume} onChange={this.volumeHandler} />
                                   </div>
                                    <button className="seconddelete" onClick={this.deleteCoin}> Delete </button>
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

export default withRouter(DeleteCoin);