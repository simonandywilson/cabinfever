import React, { useEffect, useRef, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import Grid from "../components/grid/Grid";
import * as style from "../styles/album.module.css";
import { useAutoscrollContext, useAutoscrollUpdateContext } from "../state/GlobalState";
import { useSwipeable } from "react-swipeable";

const Album = ({ data }) => {
    const tracks = data.allSanityAlbum.album;
    const albumRef = useRef(null);
    const hasWindow = typeof window !== "undefined";

    const AutoscrollState = useAutoscrollContext();
    const AutoscrollUpdate = useAutoscrollUpdateContext();

    const [paused, setPaused] = useState(false);

    useEffect(() => {
        let interval = null;
        if (!paused) {
            interval = setInterval(() => {
                albumRef.current.scrollBy(0, 1);
            }, 25);
        } else if (paused) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [paused]);

    useEffect(() => {
        if (hasWindow) {
            let timer;
            const scrollStart = () => setPaused(true);
            const scrolling = () => {};
            const scrollEnded = () => setPaused(false);
            const handleScroll = () => {
                scrolling();
                if (typeof timer == "undefined") scrollStart();
                clearTimeout(timer);
                timer = setTimeout(() => {
                    timer = undefined;
                    scrollEnded();
                }, 2000);
            };
            window.addEventListener("wheel", handleScroll);
            return () => window.removeEventListener("wheel", handleScroll);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlers = useSwipeable({
        onSwiping: () => {
            let timer;
            const swipeStart = () => setPaused(true);
            const swipeEnded = () => setPaused(false);
            if (typeof timer == "undefined") swipeStart();
            clearTimeout(timer);
            timer = setTimeout(() => {
                timer = undefined;
                swipeEnded();
            }, 2000);
        },
    });

    return (
        <Layout>
            <div className={style.album} ref={albumRef} {...handlers}>
                {tracks.map((track) => {
                    return <Grid key={track._id} track={track} />;
                })}
            </div>
        </Layout>
    );
};

export default Album;

export const query = graphql`
    query AlbumQuery {
        allSanityAlbum(sort: { fields: [orderRank], order: ASC }) {
            album: nodes {
                _id
                title
                number
                language
                alignment
                typeface
                cards {
                    _key
                    asset {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                    filename {
                        current
                    }
                }
            }
        }
    }
`;
