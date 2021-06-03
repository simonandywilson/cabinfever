import React, {useState} from 'react'
import * as style from "../styles/menu.module.css";
import { motion } from "framer-motion";
import Arrow from "../images/arrow.svg";

const Menu = () => {
    const [visible, setVisible] = useState(false);
    const popover = {
        open: { height: "250px", width: "250px" },
        closed: { height: 0, width: 0 },
    };
    const text = {
        open: { opacity: 1, duration: 2 },
        closed: { opacity: 0, duration: 2 },
    };

    return (
        <menu className={style.menu}>
            <div className={style.button} onClick={() => setVisible((prevVisible) => !prevVisible)}>
                <img className={style.arrow} src={Arrow} alt="Cabin Fever" draggable="false" />
            </div>
            <motion.div
                className={style.popover}
                animate={visible ? "open" : "closed"}
                variants={popover}
            >
                <motion.div
                    className={style.contact}
                    animate={visible ? "open" : "closed"}
                    variants={text}
                >
                    <div className={style.link}>INSTAGRAM</div>
                    <div className={style.link}>TWITTER</div>
                    <div className={style.link}>EMAIL</div>
                </motion.div>
            </motion.div>
        </menu>
    );
}

export default Menu
