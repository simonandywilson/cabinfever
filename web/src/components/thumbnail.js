import React, {useState} from "react";
import * as style from "../styles/thumbnail.module.css";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
                const start = convertTime(thumbs.start);
                // const end = convertTime(thumbs.end);
                const currentThumbnail = start === 360;
                const image = getImage(thumbs.thumbnail[props.index].asset);

                return (
                    currentThumbnail && (
                        <div className={style.colour} key={thumbs._key}>
                            <GatsbyImage image={image} alt={""} draggable="false" />
                        </div>
                    )
                );
            })}
        </div>
    );
};

const convertTime = (time) => {
    const split = time.split(":");
    const hours = parseInt(split[0], 10);
    const minutes = parseInt(split[1], 10);
    const total = hours * 60 + minutes;
    return total;
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
