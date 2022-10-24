import S from "@sanity/desk-tool/structure-builder";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { AboutIcon, AlbumIcon, HomepageIcon, SeoIcon, TimelineIcon } from "./styles/Icons";

export default () =>
	S.list()
		.title("Content")
		.items([
			S.listItem()
				.title("Homepage")
				.icon(() => HomepageIcon())
				.child(S.documentList().title("Content").filter('_type == "content"')),
			S.divider(),
			orderableDocumentListDeskItem({
				type: "album",
				title: "Album",
				icon: () => AlbumIcon(),
			}),
			S.divider(),
			orderableDocumentListDeskItem({
				type: "timeline",
				title: "Timeline",
				icon: () => TimelineIcon(),
			}),
			S.divider(),
			S.listItem()
				.title("About")
				.icon(() => AboutIcon())
				.child(S.document().title("About").schemaType("about").documentId("about")),
			S.divider(),
			S.listItem()
				.title("SEO")
				.icon(() => SeoIcon())
				.child(S.document().title("SEO").schemaType("seo").documentId("seo")),
			S.divider(),
		]);
