import S from "@sanity/desk-tool/structure-builder";
import { BiAlbum, BiInfoCircle, BiGlobe, BiTimeFive, BiCalendar } from "react-icons/bi";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Homepage")
                .icon(BiTimeFive)
                .child(S.documentList().title("Content").filter('_type == "content"')),
            S.divider(),
            orderableDocumentListDeskItem({
                type: "album",
                title: "Album",
                icon: BiAlbum,
            }),
            S.divider(),
            orderableDocumentListDeskItem({
                type: "timeline",
                title: "Timeline",
                icon: BiCalendar,
            }),
            S.divider(),
            S.listItem()
                .title("About")
                .icon(BiInfoCircle)
                .child(S.document().title("About").schemaType("about").documentId("about")),
            S.divider(),
            S.listItem()
                .title("SEO")
                .icon(BiGlobe)
                .child(S.document().title("SEO").schemaType("seo").documentId("seo")),
            S.divider(),
        ]);
