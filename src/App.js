import logo from './logo.svg';
import './App.css';
import Tours from './components/Tours';
import data from './data';
import { useState } from 'react';
function App() {

  const [tours , setTours] = useState(data);

      function removeTour(id){
        const newTours = tours.filter( tour  => tour.id !== id );
        setTours(newTours);
      }
      function refreshtour(){
        setTours(data);
      }
      if(tours.length == 0){
        return (
          <div className='refresh'>
             <h2>No Tours Left</h2>
              <button onClick={refreshtour}>Refresh</button>
          </div>
        )
      }
  return (
    <div className="content_wrapper">
        <h2 className='heading_main'>Plan with Kambotour</h2>
        <Tours tours={tours} removeTour={removeTour}/>
    </div>

  );
}

export default App;
