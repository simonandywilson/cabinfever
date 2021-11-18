import { BiCircle } from "react-icons/bi";
import { orderRankField } from "@sanity/orderable-document-list";

export default {
    title: "Album",
    name: "album",
    type: "document",
    fields: [
        orderRankField({ type: "album" }),
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Number",
            name: "number",
            type: "string",
        },
        {
            title: "Language",
            name: "language",
            type: "string",
        },
        {
            title: "Alignment",
            name: "alignment",
            type: "string",
            options: {
                list: [
                    { title: "Left", value: "left" },
                    { title: "Right", value: "right" },
                ],
                layout: "radio",
                direction: "horizontal",
            },
        },
        {
            title: "Cards",
            name: "cards",
            type: "array",
            of: [
                {
                    type: "card",
                },
            ],
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "number",
            media: "cards",
        },
        prepare(selection) {
            const { title, subtitle, media } = selection;
            return {
                title: title ?? "Album Group",
                subtitle: subtitle ?? subtitle.toString().padStart(2, "0"),
                media: media ? media[0] : BiCircle,
            };
        },
    },
};
