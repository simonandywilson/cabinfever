import React, {useState} from "react";
import * as style from "../styles/thumbnail.module.css";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import moment from "moment";

const Thumbnail = (props) => {
    const {
        allSanityContent: { nodes: content },
    } = useStaticQuery(getData);
    const [visible, setVisible] = useState(true);

    return (
        <div
            className={style.thumbnail}
            onMouseOver={() => setVisible((prevVisible) => !prevVisible)}
            onFocus={() => setVisible((prevVisible) => !prevVisible)}
            role="presentation"
            style={{ opacity: visible ? "1" : "0" }}
        >
            {content.map((thumbs) => {
                const currentThumbnail = isTimeBetween(thumbs.start, thumbs.end, props.time);
                const image = getImage(thumbs.thumbnail[props.index].asset);

                return (
                    currentThumbnail && (
                        <div
                            className={style.colour}
                            key={thumbs._key}
                            style={{
                                background: image.backgroundColor,
                                display: currentThumbnail ? "block" : "none",
                            }}
                        >
                            <GatsbyImage
                                image={image}
                                aspectRatio={16 / 9}
                                alt={""}
                                draggable="false"
                            />
                        </div>
                    )
                );
            })}
        </div>
    );
};

const isTimeBetween = function (startTime, endTime, serverTime) {
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

export default Thumbnail;

const getData = graphql`
    {
        allSanityContent {
            nodes {
                _key
                start
                end
                thumbnail {
                    asset {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`;
