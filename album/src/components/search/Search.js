import React, { useRef, useState, useEffect } from "react";
import * as style from "./search.module.css";
import { useSearchUpdateContext } from "../../state/GlobalState";
import { motion } from "framer-motion";

const Search = ({ search, setSearch }) => {
    const input = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const SearchUpdate = useSearchUpdateContext();

    const handleSearch = (e) => {
        if (e.key === "Backspace" || e.key === "Delete") {
            return;
        }
        if (/^[0-9cf-]+|[\b]+$/.test(e.key)) {
            return;
        } else {
            e.preventDefault();
        }
    };

    useEffect(() => {
        if (inputValue.length === 10) {
            SearchUpdate(inputValue.toUpperCase());
        }
    }, [inputValue]);

    const variants = {
        in: { top: 0 },
        out: { top: "50%" },
    };

    return (
        <div className={style.search}>
            <motion.div
                className={style.wrapper}
                initial={"out"}
                animate={search ? "in" : "out"}
                variants={variants}
            >
                <input
                    className={style.input}
                    type="text"
                    placeholder="00-000-000"
                    maxLength="10"
                    onKeyDown={(e) => handleSearch(e)}
                    ref={input}
                    onChange={() => setInputValue(input.current.value)}
                ></input>
                <button type="submit" className={style.icon} onClick={() => setSearch(false)} >
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
            </motion.div>
        </div>
    );
};

export default Search;
