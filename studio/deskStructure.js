import S from "@sanity/desk-tool/structure-builder";
import { BiLoaderCircle, BiUser, BiGlobe, BiTimeFive, BiAlbum } from "react-icons/bi";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("24 Hours")
                .icon(BiTimeFive)
                .child(
                    S.list()
                        .title("24 Hours")
                        .items([
                            S.listItem()
                                .title("Content")
                                .icon(BiLoaderCircle)
                                .child(
                                    S.documentList().title("Content").filter('_type == "content"')
                                ),
                            S.listItem()
                                .title("About")
                                .icon(BiUser)
                                .child(
                                    S.document()
                                        .title("About")
                                        .schemaType("about")
                                        .documentId("about")
                                ),
                        ])
                ),
            S.divider(),
            S.listItem()
                .title("Album")
                .icon(BiAlbum)
                .child(
                    S.list()
                        .title("Album")
                        .items([
                            orderableDocumentListDeskItem({
                                type: "album",
                                title: "Content",
                                icon: BiLoaderCircle,
                            }),
                        ])
                ),
            S.divider(),
            S.listItem()
                .title("SEO")
                .icon(BiGlobe)
                .child(S.document().title("SEO").schemaType("seo").documentId("seo")),
            S.divider(),
        ]);

