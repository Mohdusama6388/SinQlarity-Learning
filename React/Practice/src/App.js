import Firstcomponent from './components/Firstcomponent';
import Backdrop from './components/Backdrop';
import { useState } from 'react';
function App() {
  const[modalopen,setModalopen]=useState(false);
  const Modalopen=()=>{
    setModalopen(false)
  }
  const openModalHandler=()=>{
    setModalopen(true)
  }
  return (
    <div  >
      <h1>He its my application</h1>
     {modalopen?<Firstcomponent owner="usama" reason ="For demo" closemodal={Modalopen}/>:null}
     {modalopen? <Backdrop/>:null}
      <button onclick={openModalHandler}>open modals</button>
</div>
  );
}

export default App;
