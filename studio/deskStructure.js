import S from "@sanity/desk-tool/structure-builder";
import { BiCube } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiGlobe } from "react-icons/bi";

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Content")
                .icon(BiCube)
                .child(S.document().title("Content").schemaType("content").documentId("content")),
            S.listItem()
                .title("About")
                .icon(BiUser)
                .child(S.document().title("About").schemaType("about").documentId("about")),
            S.divider(),
            S.listItem()
                .title("SEO")
                .icon(BiGlobe)
                .child(S.document().title("SEO").schemaType("seo").documentId("seo")),
            S.divider(),
        ]);
