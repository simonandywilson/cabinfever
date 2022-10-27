import React, { useEffect, useRef, useState } from "react";
import { graphql } from "gatsby";
import Grid from "../components/grid/Grid";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Search from "../components/search/Search";
import Footer from "../components/footer/Footer";
import * as style from "../styles/album.module.css";
import { useSwipeable } from "react-swipeable";
import { useOffsetContext } from "../state/GlobalState";

const Album = ({ data }) => {
    const tracks = data.allSanityAlbum.album;
    const albumRef = useRef(null);
    const hasWindow = typeof window !== "undefined";
    const OffsetState = useOffsetContext();
    const [about, setAbout] = useState(false);
    const [search, setSearch] = useState(false);
    const [paused, setPaused] = useState(false);

    const refPassthrough = (el) => {
        handlers.ref(el);
        albumRef.current = el;
    };

    useEffect(() => {
        if (hasWindow) {
            albumRef.current.scrollBy({
                top: OffsetState - window.innerHeight / 2 + 80,
                left: 0,
                behavior: "smooth",
            });
        }
    }, [OffsetState]);

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

    useEffect(() => {
        if (search) {
            setPaused(true);
        } else {
            setPaused(false);
        }
    }, [search]);

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
        <>
            <Header about={about} setAbout={setAbout} setSearch={setSearch} />
            <About about={about} />
            <Search search={search} setSearch={setSearch} />
            <div className={style.album} {...handlers} ref={refPassthrough} onClick={() => setSearch(false)}>
                {tracks.map((track) => {
                    return <Grid key={track._id} track={track} />;
                })}
            </div>
            <Footer />
        </>
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
