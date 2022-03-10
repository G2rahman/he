import React, { Component } from 'react';
import Coindata from '../services/Coindata';
import {useNavigate} from "react-router-dom";

class ListCoin extends Component {
      constructor(props)
      {
          super(props)
          this.state={
                coins:[] 
          }
          this.addCoin=this.addCoin.bind(this);
          this.editCoin=this.editCoin.bind(this);
          this.deleteCoin=this.deleteCoin.bind(this);
          this.viewCoin=this.viewCoin.bind(this);
      }
    
     componentDidMount() {
         Coindata.getALLCoins().then((res) => {
             console.log(res);
             this.setState({coins:res.data});
         }).catch(()=>console.log("jere"));
     

        }
    //function ListCoin()

     addCoin()
     {
        
        //this.props.history.push('/addcoin');
        this.props.navigate('/addcoin');
     }

     editCoin(id)
     {
        //this.props.history.push(`/update-coin/${id}`);
        this.props.navigate(`/update-coin/${id}`);
     }

     deleteCoin(id)
     {
       // this.props.history.push(`/delete-coin/${id}`);
       this.props.navigate(`/delete-coin/${id}`);
       
        
     }

     viewCoin(id)
     {
       // this.props.history.push(`/view-coin/${id}`);
       this.props.navigate(`/view-coin/${id}`);
        
     }
    

    render() {
        console.log(this.state.coins);
        return (
            <div className="page">
                <h2 className="text-center">Coin list</h2>
                <div> 
                    <button className="addbutton" onClick={this.addCoin}> Add Coin</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th className="field">Id</th>
                                <th className="field">Coin </th>
                                <th className="field">Ticker</th>
                                <th className="field">Price</th>
                                <th className="field">Volume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.coins.map(
                                     (coin,index) =>
                                     <tr key={index}>
                                         <td>{coin.id}</td>
                                         <td>{coin.coin}</td>
                                         <td>{coin.ticker}</td>
                                         <td>{coin.price}</td>
                                         <td>{coin.volume}</td>
                                         <td>
                                            <button onClick={() =>this.editCoin(coin.id)} className="btn btn-primary">Update</button> 
                                            <button onClick={() =>this.deleteCoin(coin.id)} className="delete">Delete</button> 
                                            {/* <button onClick={() =>this.viewCoin(coin.id)} className="btn btn-primary">View</button>  */}
                                         </td>
                                     </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}


export default ListCoin;