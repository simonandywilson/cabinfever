export default {
    title: "Content",
    name: "content",
    type: "document",
    __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
    fields: [
        // Daytime
        {
            title: "Day",
            name: "day",
            type: "thumbnail",
            validation: (Rule) => Rule.min(16),
        },
        // Nightime
        {
            title: "Night",
            name: "night",
            type: "thumbnail",
            validation: (Rule) => Rule.min(16),
        },
        {
            title: "Order",
            name: "order",
            type: "layout",
            hidden: true,
        },
    ],
};
