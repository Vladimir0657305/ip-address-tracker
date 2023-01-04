import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import { createContext, useState } from 'react';

export var coordinatesContext = createContext('');

function App() {
  const [coordinates, setCoordinates] = useState({});
  
  return (
    <>
      <coordinatesContext.Provider value={{ coordinates, setCoordinates }}>
          <div className="App">
              <Header />
              <Map />
          </div>
      </coordinatesContext.Provider>
  </>
  );
}

export default App;
