import { useState, useEffect } from "react";

export function useCountDown(){
    const [secondsLeft, setSecondsLeft] = useState<number>(0);
    
    useEffect(() => {
        if(secondsLeft <= 0) return;

        const timeout = setTimeout(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000)

        return () => clearTimeout(timeout);
    }, [secondsLeft])

    function startCountDown(seconds: number){
        setSecondsLeft(seconds);
    }

    return {secondsLeft, startCountDown};
}

export function useCountUp(){
    const [ secondsCount, setSecondsCount ] = useState<number>(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSecondsCount(secondsCount + 1);      
        }, 1000)

        return () => clearTimeout(timeout);
    }, [secondsCount])

    function startCountUp(seconds: number){
        setSecondsCount(seconds);
    }

    return {secondsCount, startCountUp};
}