import React, {useState} from "react";
import * as style from "./banner.module.css";
import { useStaticQuery, graphql } from "gatsby";
import Ticker from "react-ticker";
import PageVisibility from "react-page-visibility";

const Banner = () => {
    const { sanityAbout } = useStaticQuery(getData);
    const [pageIsVisible, setPageIsVisible] = useState(true);

    const handleVisibilityChange = (isVisible) => {
        setPageIsVisible(isVisible);
    };
    return (
        <main className={style.banner}>
            <div className={style.wrapper}>
                <PageVisibility onChange={handleVisibilityChange}>
                    {pageIsVisible && (
                        <Ticker speed={10} style={{overflow: "visible"}}>
                            {() => (
                                <a
                                    href={sanityAbout.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={style.text}
                                >
                                    {sanityAbout.banner}&emsp;
                                </a>
                            )}
                        </Ticker>
                    )}
                </PageVisibility>
            </div>
        </main>
    );
};

export default Banner;

const getData = graphql`
    {
        sanityAbout {
            banner
            link
        }
    }
`;
