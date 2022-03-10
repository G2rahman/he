import axios from 'axios';

const coinsqlurl="http://localhost:8080/home";
class Coindata{

    getALLCoins(){
       return axios.get(coinsqlurl+"/allcoins");
    }

    newCOINS(coin){
        return axios.post(coinsqlurl+"/addcoin",coin);
    }

    findByCoin(coin){
        return axios.get(coinsqlurl+"/coin/"+coin);
    }
    findById(id){
        return axios.get(coinsqlurl+"/id/"+id);
    }

    getCoinByTicker(ticker){
        return axios.get(coinsqlurl+"/coin/"+ticker);
    }

    updateCoin(coin,id){
        return axios.put(coinsqlurl+"/coin/"+id,coin);
    }
    //updateByid(id){
       // return axios.put(coinsqlurl+"/id"+id);
    //}

    deleteCoin(coin){
        return axios.delete(coinsqlurl+"/coin/"+coin);
    }
    deleteById(id){
        return axios.delete(coinsqlurl+"/id/"+id);
    }

}

export default new Coindata();