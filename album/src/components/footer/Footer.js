import React from "react";
import * as style from "./footer.module.css";
import { useCurrentContext } from "../../state/GlobalState";

const Footer = () => {
    const CurrentState = useCurrentContext();
    return (
        <footer className={style.footer}>
            <h1 className={style.number}>
                <span className={style.track}>TRACK&nbsp;</span>
                {CurrentState.number}
            </h1>
            <h1 className={style.language}>{CurrentState.language}</h1>
            <h1 className={style.title}>{CurrentState.track}</h1>
        </footer>
    );
};

export default Footer;
