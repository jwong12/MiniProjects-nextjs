import React from 'react';
import styles from './key.module.css';

export default function Key({ children, name, code, kit, src, runAnimation }) {
    return (
        <>
            <div className={styles.box} data-key={code}>
                <div className={styles.key}>{name}</div>
                <div className={styles.kit}>{kit}</div>
            </div>
            <audio data-key={code} src={src}></audio>
        </>
    );
}