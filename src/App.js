import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

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
  return (
    <div className="App">

        <Item name="deepu"></Item>
        <ItemDate></ItemDate>
    </div>
  );
}

export default App;
