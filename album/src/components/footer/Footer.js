import React from "react";
import * as style from "./footer.module.css";
import { useCurrentContext } from "../../state/GlobalState";

const Footer = () => {
    const CurrentState = useCurrentContext();

    const setTypeface = {
        diatype: "var(--font-family)",
        arial: "var(--noto-sans)",
        open: "var(--open-sans)",
    };

    return (
        <footer className={style.footer}>
            <h1 className={style.number}>
                <span className={style.track}>TRACK&nbsp;</span>
                {CurrentState.number}
            </h1>
            <h1 className={style.language}>{CurrentState.language}</h1>
            <h1 className={style.title} style={{ fontFamily: setTypeface[CurrentState.typeface] }}>
                {CurrentState.track}
            </h1>
        </footer>
    );
};

export default Footer;
