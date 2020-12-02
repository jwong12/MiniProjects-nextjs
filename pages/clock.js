import { useRef, useEffect } from 'react';
import styles from '../styles/Clock.module.css';

export default function Clock() {
    const secondsHand = useRef(null);
    const minutesHand = useRef(null);
    const hoursHand = useRef(null);

    useEffect(() => {
        setClockHands(true);
        setTimeout(runClock, 2000);
    }, []);

    function runClock() {
        secondsHand.current.style.transition = 'all 0.5s cubic-bezier(0, 1.94, 0.65, 0.79) 0s';
        minutesHand.current.style.transition = 'all 0.5s cubic-bezier(0, 1.94, 0.65, 0.79) 0s';
        hoursHand.current.style.transition = 'all 0.5s cubic-bezier(0, 1.94, 0.65, 0.79) 0s';
        setInterval(setClockHands, 1000);
    }

    function setClockHands(isInitial) {
        const date = new Date();
        const secondsDegree = (date.getSeconds() / 60) * 360 + 90;
        const minutesDegree = (date.getMinutes() / 60) * 360 + 90;
        const hoursDegree = (date.getHours() / 12) * 360 + 90;

        if (!isInitial) {
            if (date.getSeconds() === 0) {
                secondsHand.current.style.transition = 'none';
                setTimeout(() => {
                    secondsHand.current.style.transition = 'all 0.5s cubic-bezier(0, 1.94, 0.65, 0.79) 0s';
                }, 1000);
    
            }

            if (date.getMinutes() === 0) {
                minutesHand.current.style.transition = 'none';
                setTimeout(() => {
                    minutesHand.current.style.transition = 'all 0.5s cubic-bezier(0, 1.94, 0.65, 0.79) 0s';
                }, 1000);
    
            }
            
            if (date.getHours() === 0) {
                hoursHand.current.style.transition = 'none';
                setTimeout(() => {
                    hoursHand.current.style.transition = 'all 0.5s cubic-bezier(0, 1.94, 0.65, 0.79) 0s';
                }, 1000);
            }
        }        

        secondsHand.current.style.transform = `rotate(${secondsDegree}deg)`;
        minutesHand.current.style.transform = `rotate(${minutesDegree}deg)`;
        hoursHand.current.style.transform = `rotate(${hoursDegree}deg)`;
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.clock}>
                <div className={`${styles.hand} ${styles.secondsHand}`} ref={secondsHand}></div>
                <div className={`${styles.hand} ${styles.minutesHand}`} ref={minutesHand}></div>
                <div className={`${styles.hand} ${styles.hoursHand}`} ref={hoursHand}></div>
                <div className={`${styles.hand} ${styles.centerPiece}`}></div>
            </div>
        </div>
    );
}