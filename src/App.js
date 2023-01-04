import './App.css';
import Header from './components/Header';
import Map from './components/Map';
// import { createContext, useState } from 'react';

// export var headerHeightContext = createContext('');

function App() {
  // const [heightHeader, setHeigthHeader] = useState('');
  
  return (
    <>
      {/* <headerHeightContext.Provider value={{ heightHeader, setHeigthHeader }}> */}
          <div className="App">
              <Header />
              <Map />
          </div>
      {/* </headerHeightContext.Provider> */}
  </>
  );
}

export default App;
