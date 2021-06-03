import React, { useState } from "react";
import * as style from "../styles/menu.module.css";
import { useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";
import Arrow from "../images/arrow.svg";

const Menu = () => {
    const {
        sanityAbout: { contact },
    } = useStaticQuery(getData);
    const [visible, setVisible] = useState(false);
    const popover = {
        open: { height: "250px", width: "250px" },
        closed: { height: 0, width: 0 },
    };
    const text = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    };

    return (
        <menu className={style.menu}>
            <div
                className={style.button}
                onClick={() => setVisible((prevVisible) => !prevVisible)}
                role="presentation"
            >
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
                    {contact.map((social) => {
                        const linkType = () => {
                            if (social.type === "external") {
                                return (
                                    <a
                                        href={social.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {social.title}
                                    </a>
                                );
                            } else if (social.type === "email") {
                                return (
                                    <a href={"mailto:" + social.link}>
                                        {social.title}
                                    </a>
                                );
                            } else if (social.type === "phone") {
                                return (
                                    <a href={"tel:" + social.link}>
                                        {social.title}
                                    </a>
                                );
                            }
                        };
                        return (
                            <div key={social._key} className={style.link}>
                                {linkType()}
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </menu>
    );
};

export default Menu;

const getData = graphql`
    {
        sanityAbout {
            contact {
                title
                link
                type
            }
        }
    }
`;
