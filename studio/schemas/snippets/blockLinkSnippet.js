import { LinkIcon } from "../../styles/Icons";

export default {
	name: "blockLink",
	title: "Link",
	type: "object",
	icon: () => LinkIcon("small"),
	blockEditor: {
		icon: () => LinkIcon("small"),
	},
	fields: [
		{
			name: "type",
			title: "Type",
			type: "string",
			options: {
				list: [
					{ title: "Website", value: "external" },
					{ title: "Email", value: "email" },
					{ title: "Telephone", value: "telephone" },
				],
			},
		},
		{
			name: "link",
			title: "Link",
			type: "string",
			hidden: ({ parent }) => !parent?.type,
		},
	],
};
