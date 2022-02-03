import React from 'react';
import {Props2} from '../services/type';
function BtnComponents({state,start,stop,resume,reset}:Props2) {
    return (
        <div>
            {(state == 0) ?  <button className="stopwatch-btn stopwatch-btn-gre" onClick={start}>Start</button> : ''}
            {(state == 1) ? <div> <button className="stopwatch-btn stopwatch-btn-red" onClick={stop}>Stop</button>
            <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>Reset</button> </div>: ''}
            {(state == 2) ? <div> <button className="stopwatch-btn stopwatch-btn-gre" onClick={resume}>Resume</button>
            <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>Reset</button> </div>: ''}
        </div>
      );
    }
    

export default BtnComponents;
