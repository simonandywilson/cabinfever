import React, { useState, useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as style from "./card.module.css";
import { useSearchContext, useCurrentUpdateContext } from "../../state/GlobalState";
import { useInView } from "react-intersection-observer";

const Card = ({ track, code, number, image, alignment, typeface }) => {
    const [hover, setHover] = useState(false);
    const SearchState = useSearchContext();
    const cardImage = getImage(image);
    const CurrentUpdate = useCurrentUpdateContext();

    // const { ref, inView } = useInView({
    //     threshold: 0.5,
    // });

    // useEffect(() => {
    //     CurrentUpdate({
    //         track: track.title,
    //         number: track.number,
    //         language: track.language,
    //     });
    //     console.log("in view");
    // }, [inView]);

    const setTypeface = {
        diatype: "var(--font-family)",
        arial: "var(--arial)",
        open: "var(--open-sans)",
    };

    return (
        <div
            className={style.card}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            role="button"
            tabIndex="0"
            id={code}
            // ref={ref}
        >
            <div
                className={style.borderHighlight}
                style={{ opacity: SearchState === code ? 1 : 0 }}
            ></div>
            <div className={style.border}></div>
            <div
                className={style.text}
                style={{
                    opacity: hover ? 1 : 0,
                    textAlign: alignment === "left" ? "left" : "right"
                }}
            >
                <p className={style.track} style={{fontFamily: setTypeface[typeface]}}>{track}</p>
                <p className={style.code}>({code})</p>
                <p className={style.number}>{number}</p>
            </div>
            <div className={style.image}>
                <GatsbyImage
                    image={cardImage}
                    alt={`${track}, ${code}`}
                    imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
                />
            </div>
        </div>
    );
};

export default Card;
