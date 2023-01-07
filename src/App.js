import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import { createContext, useEffect, useState } from 'react';

export var coordinatesContext = createContext('');

function App() {
  const [coordinates, setCoordinates] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorr, setIsErrorr] = useState(false);
  const [time, setTime] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(true)
    }, 500);
    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <coordinatesContext.Provider value={{ coordinates, setCoordinates, isLoading, setIsLoading, isErrorr, setIsErrorr }}>
        <div className="App">
          <Header />
          {
            time && <Map />
          }
        </div>
      </coordinatesContext.Provider>
    </>
  );
}

export default App;
