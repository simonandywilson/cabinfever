import React, {useState} from "react";
import * as style from "../styles/banner.module.css";
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
                        <Ticker speed={10}>
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
