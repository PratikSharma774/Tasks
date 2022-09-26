import logo from './logo.svg';
import './App.css';
import Contact from './contact'
// import TemporaryNaame from './middle'
import Temporary from './header'
// import Tempo from './footer'
function App() {
  return (
    <>
     {/* <img src={require('./images/mr-whiskerson.png')}> */}
  {/* <Temporary/> */}
 {/* <TemporaryNaame/> */}
 {/* <Tempo/> */}
<div  className="contacts">
  <Contact
    img ={require('./images/mr-whiskerson.png')}
    name="Mr Whiskerson"
    phone="(212) 555-2345" 
    email="mr.whiskaz@catnap.com"
  />
    <Contact
    img ={require('./images/fluffykins.png')}
    name="Fluffykins"
    phone="(212) 555-2345" 
    email="fluff@me.com"
  />
    <Contact
    img ={require('./images/felix.png')}
    name="Felix"
    phone="(212) 555-4567" 
    email="Felix.com"
  />
    <Contact
    img ={require('./images/pumpkin.png')}
    name="Mr Whiskn"
    phone="(212) 555-2345" 
    email="pumpkin.com"
  />
</div>
 </>
  )
}

export default App;
