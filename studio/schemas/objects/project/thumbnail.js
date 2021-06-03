export default {
    title: "Thumbnail",
    name: "thumbnail",
    type: "array",
    of: [
        {
            type: "image",
        },
    ],
    preview: {
        select: {
            media: "asset",
        },
    },
};
