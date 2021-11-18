import sanityClient from "part:@sanity/base/client";
const client = sanityClient.withConfig({ apiVersion: "2021-03-25" });
import { BiRectangle } from "react-icons/bi";

export default {
    title: "Card",
    name: "card",
    type: "image",
    fields: [
        {
            title: "Filename",
            name: "filename",
            type: "slug",
            options: {
                isHighlighted: true,
                source: async (docs, options) => {
                    const filename = await client.fetch(
                        `*[_type == 'sanity.imageAsset' && _id == $parentId][0].originalFilename`,
                        { parentId: options.parent.asset._ref }
                    );
                    return filename.replace(/\.[^/.]+$/, "");
                },
                slugify: (source) => source,
                disableArrayWarning: true,
            },
        },
    ],
    preview: {
        select: {
            title: "filename",
            media: "asset",
        },
        prepare(selection) {
            const { title, media } = selection;
            return {
                title: title ? title.current : "Card",
                media: media ?? BiRectangle,
            };
        },
    },
};
