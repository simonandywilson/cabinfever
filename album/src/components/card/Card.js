import React, { useState, useEffect, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as style from "./card.module.css";
import { useSearchContext, useCurrentUpdateContext, useOffsetUpdateContext } from "../../state/GlobalState";

const Card = ({ track, code, number, image, alignment, typeface }) => {
    const [hover, setHover] = useState(false);
    const SearchState = useSearchContext();
    const cardImage = getImage(image);
    const CurrentUpdate = useCurrentUpdateContext();
    const OffsetUpdate = useOffsetUpdateContext();
    const cardRef = useRef(null);
    

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

    

    useEffect(() => {
        if (SearchState === code) {
            OffsetUpdate(window.pageYOffset + cardRef.current.getBoundingClientRect().top);
        }
    }, [SearchState]);

    const setTypeface = {
        diatype: "var(--font-family)",
        arial: "var(--noto-sans)",
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
            ref={cardRef}
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
                    textAlign: alignment === "left" ? "left" : "right",
                }}
            >
                <p className={style.track} style={{ fontFamily: setTypeface[typeface] }}>
                    {track}
                </p>
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
