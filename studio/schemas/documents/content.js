import { DayIcon, NightIcon } from "../../styles/Icons";

export default {
	title: "Content",
	name: "content",
	type: "document",
	fieldsets: [
		{
			name: "times",
			title: "Time Range",
			description: "Enter in 24-hour notation in the form hh:mm.",
			options: {
				collapsible: false,
				collapsed: false,
				columns: 2,
			},
		},
	],
	fields: [
		{
			title: "Start",
			name: "start",
			type: "string",
			fieldset: "times",
		},
		{
			title: "End",
			name: "end",
			type: "string",
			fieldset: "times",
		},
		{
			title: "Thumbnails",
			name: "thumbnail",
			type: "thumbnail",
			options: {
				layout: "grid",
			},
			validation: (Rule) => Rule.min(16),
		},
	],
	preview: {
		select: {
			start: "start",
			end: "end",
		},
		prepare(selection) {
			const { start, end } = selection;
			const range = `${start}–${end}`;
			const convertStart = start.replace(":", "");
			const day = convertStart > 6000 || convertStart < 1800 ? true : false;
			return {
				title: range ?? "Project",
				media: day ? () => DayIcon() : () => NightIcon(),
			};
		},
	},
};
