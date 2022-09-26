import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  function changeState(){
    setIsGoingout(prevState =>prevState? false:true)
  }
  const [isGoingOut,setIsGoingout]=React.useState(true);
  return (
    <div className="state">
    <h1 className="state--title">Is state important to know?</h1>
    <div onClick={changeState}className="state--value">
        <h1>{isGoingOut?"Yes":"NO"}</h1>
    </div>
</div>
  );
}

export default App;
