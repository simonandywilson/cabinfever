export default {
    title: "Image",
    name: "entry",
    type: "image",
    fields: [
        {
            title: "Size",
            name: "size",
            type: "string",
            options: {
                list: [
                    { title: "Small", value: "small" },
                    { title: "Large", value: "large" },
                ],
                isHighlighted: true,
                layout: "radio",
                direction: "horizontal",
            },
        },
        {
            title: "Alternative Text",
            name: "alt",
            type: "string",
            description: "Important for SEO and accessibility.",
            options: {
                isHighlighted: true,
            },
        },
    ],
    initialValue: {
        size: "small",
    },
};
