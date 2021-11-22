import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = () => {
    const {
        sanitySeo: seo,
        site: {
            siteMetadata: { siteUrl },
        },
    } = useStaticQuery(getData);

    return (
        <Helmet>
            <html lang="en" />
            {/* Primary Meta Tags */}
            <title>{seo.title}</title>
            <meta name="title" content={seo.title} />
            <meta name="description" content={seo.description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.banner.asset.url} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={seo.title} />
            <meta property="twitter:description" content={seo.description} />
            <meta property="twitter:image" content={seo.banner.asset.url}></meta>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic&family=Open+Sans&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};

export default SEO;

const getData = graphql`
    {
        sanitySeo {
            title
            description
            banner {
                asset {
                    url
                }
            }
        }
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`;
