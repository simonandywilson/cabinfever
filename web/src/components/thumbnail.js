import React, { useState } from "react";
import * as style from "../styles/thumbnail.module.css";
import { isMobile } from "react-device-detect";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Thumbnail = (props) => {
    const [visible, setVisible] = useState(true);

    const mouseOver = () => {
        if (!isMobile) {
            setVisible((prevVisible) => !prevVisible);
        }
    };

    const click = () => {
        if (isMobile) {
            setVisible((prevVisible) => !prevVisible);
        }
    };

    const image = getImage(props.image);

    return (
        <div
            className={style.thumbnail}
            onMouseOver={mouseOver}
            onFocus={mouseOver}
            onClick={click}
            role="presentation"
            style={{ opacity: visible ? "1" : "0" }}
        >
            <div
                className={style.colour}
                style={{
                    background: props.image.backgroundColor,
                }}
            >
                <GatsbyImage image={image} alt={""} draggable="false" />
            </div>
        </div>
    );
};

export default Thumbnail;