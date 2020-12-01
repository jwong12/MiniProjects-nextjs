import React, { useEffect } from 'react';
import styles from './key.module.css';

export default function Key({ children, name, code, kit, src, animation }) {
    useEffect(() => {
        console.log('KEY');
        console.log(animation);

        if (animation) {
            console.log('animation true')
        }

    }, [animation]);

    return (
        <>
            <div className={ animation ? `${styles.box} ${styles.playing}` : styles.box } data-key={code}>
                <div className={styles.key}>{name}</div>
                <div className={styles.kit}>{kit}</div>
            </div>
            <audio data-key={code} src={src}></audio>
        </>
    );
}