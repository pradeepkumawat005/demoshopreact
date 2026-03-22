import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import { useState } from 'react';
import NewProduct from './components/NewProduct';
function App() {

  const response = [
    {
      Itemname: 'nirma',
      Itemdate: '17.09.2015'
    },
    {
      Itemname: '555',
      Itemdate: '17.09.2017'
    },
     {
      Itemname: 'while',
      Itemdate: '17.09.20186'
    }
  ] 

  function printProductData(data){
    console.log(data , 'inside app');
    console.log('i am inside app');
  }

  let responsename = response[0].Itemname;
  return (
    <div className="App">
        <NewProduct printProduct={printProductData}></NewProduct>
        <Item Itemname={responsename}>{responsename}</Item>
        <ItemDate></ItemDate>
    </div>
  );
}

export default App;
