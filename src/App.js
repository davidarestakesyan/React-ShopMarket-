
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './Contacts';
import Aboutusf from './AboutUs';
import Header from './Header';
import Main from "./Main";
import {Product} from './Product';
import Basketf from "./Basket";
import Footerf from "./Footer";
import { useState } from 'react';
function App() {
  const [card,setCard] = useState([])
  function addToCard(product) {
    setCard([...card,product])
  }
  return (
    <div className="App">
     <Header/>
      <Routes>
          <Route path="/" element={<Main addToCard = {addToCard} />}/>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/AboutUs" element={<Aboutusf />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/basket" element={<Basketf  card = {card}/>} />
          
      </Routes>
<Footerf/>
    </div>
  );
}

export default App;
