import React from "react";
import * as style from "../styles/banner.module.css";
import { useStaticQuery, graphql } from "gatsby";
import Ticker from "react-ticker";

const Banner = () => {
    const { sanityAbout } = useStaticQuery(getData);
    return (
        <main className={style.banner}>
            <div className={style.wrapper}>
                <Ticker>
                    {() => (
                        <>
                            <h4 className={style.text}>
                                {sanityAbout.banner}
                            </h4>
                        </>
                    )}
                </Ticker>
            </div>
        </main>
    );
};

export default Banner;

const getData = graphql`
    {
        sanityAbout {
            banner
        }
    }
`;
