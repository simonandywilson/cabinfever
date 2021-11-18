import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useCurrentUpdateContext } from "../../state/GlobalState";
import * as style from "./grid.module.css";

import Card from "../card/Card";

const Grid = ({ track }) => {
    console.log(track);
    const CurrentUpdate = useCurrentUpdateContext();

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        CurrentUpdate({
            track: track.title,
            number: track.number,
            language: track.language,
            typeface: track.typeface
        });
    }, [inView]);

    return (
        <div className={style.grid} ref={ref}>
            {track.cards.map((card) => {
                return (
                    <Card
                        key={card._key}
                        track={track.title}
                        code={card.filename.current}
                        number={track.number}
                        image={card.asset}
                        alignment={track.alignment}
                        typeface={track.typeface}
                    />
                );
            })}
        </div>
    );
};

export default Grid;