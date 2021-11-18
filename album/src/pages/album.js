import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import GridWrapper from "../components/grid/GridWrapper";

const Album = ({ data }) => {
    const tracks = data.allSanityAlbum.album;
    return (
        <Layout>
            <GridWrapper tracks={tracks} />
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
