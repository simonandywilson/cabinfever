import React from "react";
import * as style from "../styles/thumbnail.module.css";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Thumbnail = (props) => {
    const {
        allSanityContent: { nodes: content },
    } = useStaticQuery(getData);

    return (
        <div className={style.thumbnail} style={{ display: !props.visible ? "block" : "none" }}>
            {content.map((thumbs) => {
                const start = convertTime(thumbs.start);
                const end = convertTime(thumbs.end);
                const currentThumbnail = start <= props.time;
                

                const image = getImage(thumbs.thumbnail[props.index].asset);

                return (
                    currentThumbnail && (
                        <div className={style.colour}>
                            <GatsbyImage image={image} alt={""} />
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
