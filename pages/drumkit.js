import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/DrumKit.module.css';

export default function DrumKit() {
    const [keys, setKeys] = useState([
        { name: "A", code: 65, kit: "CLAP", src: "sounds/clap.wav", runAnimation: false },
        { name: "S", code: 83, kit: "HIHAT", src: "sounds/hihat.wav", runAnimation: false },
        { name: "D", code: 68, kit: "KICK", src: "sounds/kick.wav", runAnimation: false },
        { name: "F", code: 70, kit: "OPENHAT", src: "sounds/openhat.wav", runAnimation: false },
        { name: "G", code: 71, kit: "BOOM", src: "sounds/boom.wav", runAnimation: false },
        { name: "H", code: 72, kit: "RIDE", src: "sounds/ride.wav", runAnimation: false },
        { name: "J", code: 74, kit: "SNARE", src: "sounds/snare.wav", runAnimation: false },
        { name: "K", code: 75, kit: "TOM", src: "sounds/tom.wav", runAnimation: false },
        { name: "L", code: 76, kit: "TINK", src: "sounds/tink.wav", runAnimation: false }
    ]);

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    }, []);

    function handleKeyDown(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

        if (audio !== null) {
            audio.currentTime = 0;
            audio.play();

            const keysCopy = [...keys];
            keysCopy.forEach((key) => {
                if (key.code === e.keyCode) {
                    key.runAnimation = true;
                }
            });
            setKeys(keysCopy);
        }
        
        if (!audio) return;
        
    }

    function removeTransition(e) {
        if (e.propertyName === 'transform') {
            const keysCopy = [...keys];
            keysCopy.forEach((key) => {
                key.runAnimation = false;
            });
            setKeys(keysCopy);
        }
    }

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet"/>
            </Head>
            <div className={styles.container}>
                <div className={styles.keysContainer}>
                    {keys.map((key) => <div 
                        key={key.code} 
                    >
                        <div className={ key.runAnimation ? `${styles.box} ${styles.playing}` : styles.box }
                            data-key={key.code}
                            onTransitionEnd={ removeTransition }
                        >
                            <div className={styles.key}>{key.name}</div>
                            <div className={styles.kit}>{key.kit}</div>
                        </div>
                        <audio data-key={key.code} src={key.src}></audio>
                    </div>)}
                </div>
            </div>
        </>
    );
}