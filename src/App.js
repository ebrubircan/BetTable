import React, { useMemo } from  'react'
import Table from './components/Table';
import { MobileContainer } from './components/MobileContainer';


function App(){
  const isMobile = useMemo(()=>{
    return window.innerWidth < 768
  }, [])

  if(isMobile){
    return <MobileContainer />
  }
  return <Table />;
}

export default App;
