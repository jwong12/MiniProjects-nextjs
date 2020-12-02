import { useState, useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/CSSChanger.module.css';

export default function CSSChanger() {
    const [rotateDegree, setRotateDegree] = useState(0);
    const [blurPixel, setBlurPixel] = useState(0);
    const [h1Color, setH1Color] = useState("#5BC0EB");
    const h1Ref = useRef(null);
    const imageRef = useRef(null);

    function handleInputChange(e) {
        if (e.target.name === "rotate") {
            imageRef.current.style.transform = `rotate3d(1, 1, 1, ${e.target.value}deg)`;
            setRotateDegree(e.target.value);

        } else if (e.target.name === "blur") {
            imageRef.current.style.filter = `blur(${e.target.value}px)`;
            setBlurPixel(e.target.value);

        } else if (e.target.name === "color") {
            h1Ref.current.style.color = e.target.value;
            setH1Color(e.target.value)
        }
    }

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap" rel="stylesheet"/>
            </Head>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <h1 className={styles.h1} ref={h1Ref}>Update CSS<br/> Attributes with React</h1>
                    <div className={styles.inputBar}>
                        <div className={styles.inputWrapper}>
                            <span className={styles.inputLabel}>Rotate:</span>
                            <input type="range" name="rotate" value={rotateDegree} min="0" max="360" onChange={handleInputChange}/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <span className={styles.inputLabel}>Blur:</span>
                            <input type="range" name="blur" value={blurPixel} min="0" max="20" onChange={handleInputChange}/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <span className={styles.inputLabel}>Color:</span>
                            <input type="color" name="color" value={h1Color} min="10" max="200" onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>
                <div className={styles.bodyWrapper}>
                    <img className={styles.image} src="https://source.unsplash.com/pRy07yecWt8/600x420"  ref={imageRef}/>
                </div>
            </div>
        </>
    );
}