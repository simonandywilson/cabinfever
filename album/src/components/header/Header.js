import React from "react";
import * as style from "./header.module.css";
import { useCurrentContext } from "../../state/GlobalState";


const Header = ({ about, setAbout, setSearch }) => {
    const CurrentState = useCurrentContext();

    const setTypeface = {
        diatype: "var(--font-family)",
        arial: "var(--arial)",
        open: "var(--open-sans)",
    };

    return (
        <header className={style.header}>
            <h1 className={style.track} style={{ fontFamily: setTypeface[CurrentState.typeface] }}>
                {CurrentState.track}
            </h1>
            <div className={style.info}>
                <button
                    className={style.about}
                    onClick={() => {
                        setAbout((prevAbout) => !prevAbout);
                        setSearch(false);
                    }}
                >
                    {about ? "Close" : "About"}
                </button>
                <button
                    className={style.search}
                    onClick={() => {
                        setSearch((prevSearch) => !prevSearch);
                        setAbout(false);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="39.85"
                        height="39.85"
                        viewBox="0 0 39.85 39.85"
                    >
                        <circle
                            cx="25.4"
                            cy="14.44"
                            r="13.44"
                            fill="none"
                            stroke="#ffffff"
                            strokeMiterlimit="10"
                            strokeWidth="4"
                        />
                        <line
                            x1="0.71"
                            y1="39.14"
                            x2="15.91"
                            y2="23.94"
                            fill="none"
                            stroke="#ffffff"
                            strokeMiterlimit="10"
                            strokeWidth="4"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
