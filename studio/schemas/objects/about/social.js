import { LinkIcon } from "../../../styles/Icons";

export default {
    title: "Social",
    name: "social",
    type: "object",
    icon: () => LinkIcon(),
    fields: [
        {
            title: "Type",
            name: "type",
            type: "string",
            options: {
                list: [
                    { title: "External", value: "external" },
                    { title: "Email", value: "email" },
                    { title: "Phone", value: "phone" },
                ],
            },
            initialValue: "external",
        },
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Link",
            name: "link",
            type: "string",
        },
    ],
};
