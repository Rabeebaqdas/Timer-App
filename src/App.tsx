import React,{useState} from 'react';
import './App.css';
import DisplayComponents from './Components/DisplayComponents';
import BtnComponents from './Components/BtnComponents';
import {Timer} from './services/type';

const App:React.FC = () => {
  let [timer,setTimer] = useState<Timer>({h:0 , m:0 , s:0 ,ms:0});
  let [interv,setInterv] = useState<any>();
  let [state,setState] = useState<number>(0);

  const start=():void=>{
    run();
setInterv(setInterval(run,10));
setState(1);
  }

  let updatedH = timer.h , updatedM = timer.m , updatedS = timer.s , updatedMs = timer.ms; 
  const run = ():void =>{
    if(updatedM == 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS == 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs == 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTimer({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  }
const stop = ():void =>{
  clearInterval(interv);
  setState(2);
}

const resume = ():void =>{
  start();
}

const reset = ():void =>{
  clearInterval(interv);
  setTimer({h:0 , m:0 , s:0 ,ms:0});
  setState(0);
}
  return (
    <div className="main-section">
      <h1>Stop Watch</h1>
      <div className="clock-holder">
        <div className="stopwatch">
        <DisplayComponents timer={timer}/>
        <BtnComponents state={state} start={start} stop={stop} resume={resume} reset={reset}/>
        </div>
      </div>
    </div>
  );
}

export default App;
