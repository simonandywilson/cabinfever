import React from "react";
import * as style from "./about.module.css";
import { motion } from "framer-motion";

const About = ({ about }) => {
    return (
        <motion.div
            className={style.about}
            initial={{ y: "-100%" }}
            animate={{ y: about ? 0 : "-100%" }}
            transition={{ duration: 3, type: "spring", stiffness: 50 }}
        >
            <div className={style.overflow}></div>
            <div className={style.wrapper}>
                <p>
                    Cabin Fever is a 24-hour audiovisual artwork in development by Esmeralda Conde
                    Ruiz. Composed for an ensemble of voices, domestic sounds and Zoom, Cabin Fever
                    explores the sonic potential of the digital space, creatively playing with the
                    latency and parameters of the technology whilst travelling around the world and
                    featuring singers from over 80 different countries.
                    <br />
                    <br />
                    Through each singer covering their webcam the traditional Zoom screen is
                    transformed into a mosaic of colour. As new singers join the performance the
                    colours shift and change, gradually altering the performance over the course of
                    24-hours.
                    <br />
                    <br />
                    First conceived in early 2020 lockdown in London, UK, the work takes inspiration
                    from pandemic dreaming to create a new sonic landscape.
                    <br />
                    <br />
                    The Cabin Fever album, released as a limited edition by Birmingham Record
                    Company on Friday 19th November 2021, consists of a specially-curated selection
                    of music from the 24-hour digital art work.
                    <br />
                    <br />
                    Buy the album{" "}
                    <a
                        href="https://nmc-recordings.myshopify.com/collections/new-releases-2021/products/esmeralda-conde-ruiz-cabin-fever"
                        rel="noreferrer"
                        target="_blank"
                    >
                        here
                    </a>
                    <br />
                    <br />
                    <a
                        href="https://www.instagram.com/cabinfever24hours/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Instagram
                    </a>
                    <br />
                    <a href="https://twitter.com/CF24hours" rel="noreferrer" target="_blank">
                        Twitter
                    </a>
                    <br />
                    <a href="mailto:cabinfever24hours@gmail.com">Email</a>
                </p>
            </div>
        </motion.div>
    );
};

export default About;
