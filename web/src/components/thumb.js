import React, { useState } from "react";
import * as style from "../styles/thumbnail.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import moment from "moment";

const Thumb = (props) => {
    const [active] = useState(
        isTimeBetween(props.time.start, props.time.end, props.server)
    );
    const image = getImage(props.image);
    return (
        active && (
            <div
                className={style.colour}
                style={{
                    background: props.image.backgroundColor,
                }}
            >
                <GatsbyImage image={image} alt={""} draggable="false" />
            </div>
        )
    );
};

const isTimeBetween = (startTime, endTime, serverTime) => {
    let start = moment(startTime, "H:mm");
    let end = moment(endTime, "H:mm");
    let server = moment(serverTime, "H:mm");
    if (end < start) {
        return (
            (server >= start && server <= moment("23:59:59", "h:mm:ss")) ||
            (server >= moment("0:00:00", "h:mm:ss") && server < end)
        );
    }
    return server >= start && server < end;
};

export default Thumb;
