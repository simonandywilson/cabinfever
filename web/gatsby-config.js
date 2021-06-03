module.exports = {
    siteMetadata: {
        title: "Cabin Fever",
        siteUrl: "https://www.cabinfever24hours.com",
    },
    plugins: [
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: "m8oqv0ie",
                dataset: "production",
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
