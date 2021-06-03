export default {
    title: "About",
    name: "about",
    type: "document",
    __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
    fields: [
        {
            // Banner
            title: "Banner",
            name: "banner",
            type: "text",
        },
        {
            // Contact
            title: "Contact",
            name: "contact",
            type: "contact",
            validation: (Rule) => Rule.max(4),
        },
    ],
};