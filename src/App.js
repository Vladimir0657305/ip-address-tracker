import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import { createContext, useState } from 'react';

export var coordinatesContext = createContext('');

function App() {
  const [coordinates, setCoordinates] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorr, setIsErrorr] = useState(false);

  return (
    <>
      <coordinatesContext.Provider value={{ coordinates, setCoordinates, isLoading, setIsLoading, isErrorr, setIsErrorr }}>
        <div className="App">
          <Header />
          <Map />
        </div>
      </coordinatesContext.Provider>
    </>
  );
}

export default App;
