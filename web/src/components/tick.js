import React from "react";
import * as style from "../styles/tick.module.css";
import Ticker from "react-ticker";

const Tick = (props) => {
    return (
        <div className={style.container}>
            <Ticker direction={props.direction} offset={props.offset}>
                {() => (
                    <>
                        <h1 className={style.text}>Test!</h1>
                    </>
                )}
            </Ticker>
        </div>
    );
};

export default Tick;
