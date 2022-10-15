import React from "react";
import App from "../../App";
import {howler, howl, Howl} from "howler";
import newSound from '../Main/shoosh1.mp3'

function playShoosh(e) {
    e.preventDefault()
    console.log('megapenis')
    const sound = new Howl({
        src: [newSound]
    })
    sound.play()
}

function Main () {
    return (
        <section>
            <h3>
                "What if instead of saying sheeeesh we said shooooosh?"
            </h3>
            <button onClick={playShoosh} className="shooshBtn" id="main">Shooooooosh</button>
        </section>
    )
}

export default Main;