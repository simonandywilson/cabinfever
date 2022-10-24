import blockLinkSnippet from "../snippets/blockLinkSnippet";

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
			type: "string",
		},
		{
			// Banner Link
			title: "Banner Link",
			name: "link",
			type: "url",
		},
		{
			title: "About",
			name: "text",
			type: "array",
			of: [
				{
					type: "block",
					styles: [],
					lists: [],
					marks: {
						decorators: [],
						annotations: [blockLinkSnippet],
					},
				},
			],
		},
		{
			title: "Order",
			name: "order",
			type: "layout",
			hidden: true,
		},
	],
};
