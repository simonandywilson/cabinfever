import { BiCalendarAlt } from "react-icons/bi";
import { orderRankField } from "@sanity/orderable-document-list";

export default {
    title: "Timeline",
    name: "timeline",
    type: "document",
    fields: [
        orderRankField({ type: "timeline" }),
        {
            title: "Year",
            name: "year",
            type: "number",
        },
        {
            title: "Month",
            name: "month",
            type: "string",
        },
        {
            title: "Text",
            name: "text",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [],
                    lists: [],
                    marks: {
                        decorators: [],
                    },
                },
            ],
        },
        {
            title: "Images",
            name: "images",
            type: "array",
            of: [
                {
                    type: "entry",
                },
            ],
            options: {layout: "grid"}
        },
    ],
    preview: {
        select: {
            title: "month",
            subtitle: "year",
            media: "images",
        },
        prepare(selection) {
            const { title, subtitle, media } = selection;
            return {
                title: title ?? "Timeline Entry",
                subtitle: subtitle ?? "",
                media: media ? media[0] : BiCalendarAlt,
            };
        },
    },
};
