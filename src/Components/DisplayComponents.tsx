import React from 'react';
import { Props } from '../services/type';
const DisplayComponents = ({ timer }: Props) => {
    const hour = () => {
        if (timer.h >= 1) {
            return <span>{(timer.h >= 10) ? timer.h : "0" + timer.h}</span>
        }
    }
    return (
        <div>
            {hour()}{(timer.h>=1)?" : ":''}
            <span>{(timer.m >= 10) ? timer.m : "0" + timer.m}</span>&nbsp;:&nbsp;
            <span>{(timer.s >= 10) ? timer.s : "0" + timer.s}</span>&nbsp;:&nbsp;
            <span>{(timer.ms >= 10) ? timer.ms : "0" + timer.ms}</span>
        </div>
    );
}

export default DisplayComponents;
