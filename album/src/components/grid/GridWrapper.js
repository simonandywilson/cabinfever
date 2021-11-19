import React, {useEffect, useRef} from 'react'
import Grid from "./Grid"
import { useSearchContext } from "../../state/GlobalState";
import * as style from "./grid.module.css"
import scrollTo from "gatsby-plugin-smoothscroll";

const GridWrapper = ({ tracks }) => {
    const SearchState = useSearchContext();
    const rootElement = useRef(null)

    // useEffect(() => {
        
    //     if (SearchState) {
    //         console.log("new search");
    //         scrollTo(`#CF-200-350`);
           
            
    //     }
        
    // }, [SearchState]);

    return (
        <div className={style.container} ref={rootElement}>
            {/* <button
                style={{ position: "absolute", opacity: 1, zIndex: 9999, top: 0 }}
                onClick={() => scrollTo(`#CF-200-350`)}

            >CLICK TO SCROLL</button> */}
            {tracks.map((track) => {
                return <Grid key={track._id} track={track} rootElement={rootElement }/>;
            })}
        </div>
    );
}

export default GridWrapper
