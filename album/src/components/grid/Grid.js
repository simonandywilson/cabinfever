import React, { useEffect, useRef } from "react";
import { useCurrentUpdateContext } from "../../state/GlobalState";
import * as style from "./grid.module.css";
import useOnScreen from "../../hooks/useOnScreen";

import Card from "../card/Card";

const Grid = ({ track }) => {
    const CurrentUpdate = useCurrentUpdateContext();
    const gridRef = useRef();
    const onScreen = useOnScreen(gridRef);

    useEffect(() => {
        if (onScreen) {
            CurrentUpdate({
                track: track.title,
                number: track.number,
                language: track.language,
                typeface: track.typeface,
            });
        }
    }, [onScreen]);

    return (
        <div className={style.grid} ref={gridRef}>
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
