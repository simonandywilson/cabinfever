import React, { useEffect, useRef } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import Grid from "../components/grid/Grid";
import * as style from "../styles/album.module.css";

const Album = ({ data }) => {
    const tracks = data.allSanityAlbum.album;
    const albumRef = useRef(null);

    // const [scrollPaused, setScrollPaused] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            albumRef.current.scrollBy(0, 1);
        }, 25);

        return () => clearInterval(intervalId);
    }, []);

    // useEffect(() => {
    //     const isScrolling = () => console.log("scrolling");
    //     albumRef.current.addEventListener("wheel", isScrolling);

    //     return () => albumRef.current.removeEventListener("wheel", isScrolling);
    // }, []);

    return (
        <Layout>
            <div className={style.album} ref={albumRef}>
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
