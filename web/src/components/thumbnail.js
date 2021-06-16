import React, { useState } from "react";
import * as style from "../styles/thumbnail.module.css";
import { useStaticQuery, graphql } from "gatsby";
import { isMobile } from "react-device-detect";
import Thumb from "../components/thumb";

const Thumbnail = (props) => {
    const {
        allSanityContent: { nodes: content },
    } = useStaticQuery(getData);
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

    return (
        <div
            className={style.thumbnail}
            onMouseOver={mouseOver}
            onFocus={mouseOver}
            onClick={click}
            role="presentation"
            style={{ opacity: visible ? "1" : "0" }}
        >
            {content.map((thumb) => {
                return (
                    <Thumb
                        key={thumb.thumbnail[props.index]._key}
                        image={thumb.thumbnail[props.index].asset}
                        time={thumb}
                        server={props.time}
                    />
                );
            })}
        </div>
    );
};

export default Thumbnail;

const getData = graphql`
    {
        allSanityContent {
            nodes {
                start
                end
                thumbnail {
                    _key
                    asset {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`;
