export type Timer={
    h : number,
    m:number,
    s:number,
    ms:number
}

export type Props={
        timer:Timer
}

export type Props2={
    state:number;
    start():void,
    stop():void,
    resume():void,
    reset():void
}
