import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store'
import allActions from '../../actions/actionsIndex'

const Timer = (props: any) => {
    const [minutes, setMinutes] = useState(props.startMinutes);
    const [seconds, setSeconds] = useState(props.startSeconds);
    const run = props.run;

    // call the chess reducer to get the current state
    const state = useSelector((state: RootState) => state.chessReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        let myInterval = setInterval(() => {

            // if we get a reset signal
            if (state.resetting) {
                setMinutes(props.startMinutes);
                setSeconds(props.startSeconds);
                
                // note that one more clock has been reset
                dispatch(allActions.chessActions.reset("clock"));
            }

            if (run) {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div>
        { <p> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds} </p> }
        </div>
    )
}


export default Timer