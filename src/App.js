import React from  'react'
import { BetProvider } from './components/BetContext';
import FetchData from './components/FetchData';

function App(){
  return(
    <BetProvider>
      <FetchData />
    </BetProvider>  
    );
}

export default App;
