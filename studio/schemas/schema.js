import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import seo from "./documents/seo"

import about from "./documents/about"
import contact from "./objects/about/contact"
import social from "./objects/about/social";

import content from "./documents/content"
import thumbnail from "./objects/project/thumbnail"
import layout from "./objects/project/layout"

import album from "./documents/album";
import card from "./objects/album/card";


export default createSchema({
    name: "mySchema",
    types: schemaTypes.concat([
        seo,

        about,
        contact,
        social,

        content,
        thumbnail,
        layout,

        album,
        card,
    ]),
});
