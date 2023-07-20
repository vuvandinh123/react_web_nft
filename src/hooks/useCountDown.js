import { useEffect, useRef } from "react";

export default function useCountDown({timeCountDown}){
    const coundownRef = useRef(null)
    useEffect(() => {
        const dom = coundownRef.current;
        const countdown = setInterval(() => {
            let now = new Date().getTime();
            let distance = timeCountDown - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            dom.querySelector(".days").innerHTML = days;
            dom.querySelector(".hours").innerHTML = hours;
            dom.querySelector(".minutes").innerHTML = minutes;
            dom.querySelector(".seconds").innerHTML = seconds;
        }, 1000)
        return () => clearInterval(countdown)
    }, [timeCountDown])
    return {
        coundownRef,
    }
}