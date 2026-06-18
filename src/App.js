import logo from './logo.svg';
import './App.css';
import Compute from './compute.js';
import {Greeting}  from './component.js';
import App1 from './App1';   // ✅ Import App1 here
import image from './images/hiImg.jpg'
import Clock from './clock.js';
import CounterClock from './ClockWithUseState.js';
import Effecthook from './useEffect.js';
export const handleImg=()=>{
  document.getElementById("image").src="https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVsbG98ZW58MHx8MHx8fDA%3D"
}
export const App=()=> {
  return (
    <div>
      <center>
      {/* <h1>VALLIMAYIL</h1>
      <h1>HELLO</h1>
      <img onClick={handleImg} src={image} width={200} id='image'></img>
      <Greeting name = "Sofia"/>

      
      <Compute />
      <App1 /> */}
      {/* <Clock /> */}
      {/* <Greeting /> */}
      
      {/* <CounterClock /> */}
      <Effecthook />
      
      </center>
    </div>
  );
}

//export default App;
