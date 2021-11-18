import React from "react";
import * as style from "./player.module.css";

const Player = () => {
    return (
        <div className={style.player}>
            <p>TRACK 01</p>
            <p>Répétition de choeur</p>
            <div className={style.controls}>
                <p>PLAY 00:00</p>
                <div className={style.seek}>
                    <div className={style.line}></div>
                    <div className={style.playhead}></div>
                </div>
                <p>03:34</p>
            </div>
        </div>
    );
};

export default Player;
