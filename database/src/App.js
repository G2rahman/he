import ListCoin from './components/ListCoin';
import AddCoin from './components/AddCoin';
import UpdateCoin from './components/UpdateCoin';
import DeleteCoin from './components/DeleteCoin';
import ViewCoin from './components/ViewCoin';

import { Routes,Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useEffect } from 'react';
import {useNavigate,useParams} from "react-router-dom";


function App() {
  let navigate =useNavigate();
 // let params =useParams();
//    useEffect(()=>{
// console.log(id);
//    },[id])
  // console.log(params);
  return (



 <div className="everything"> 

          <Header />
            <div className="container">
              <Routes>
                  <Route path="/home" element={<ListCoin navigate={navigate}/>}/>
                  <Route path="/" element={<ListCoin navigate={navigate}/>}/>
                  {/* <Route path="/allcoins" element={<ListCoin navigate={navigate}/>}/> */}
                  <Route path="/addcoin" element={<AddCoin navigate={navigate}/>}/>
                  {/* <Route path="/update-coin/:id" element={<UpdateCoin navigate={navigate}/>}/>  */}
                  <Route path="/update-coin/:id" element={<UpdateCoin navigate={navigate}/>}/> 
                  {/* <Route path="/delete-coin/:id" element={<DeleteCoin navigate={navigate}/>}/>  */}
                  <Route path="/delete-coin/:id" element={<DeleteCoin navigate={navigate} />}/> 
                  <Route path="/view-coin/:id" element={<ViewCoin navigate={navigate}/>}/>
                  
              </Routes>
            </div>
            <Footer />

          </div> 
  );
}

export default App;