import React, { useState, useEffect, useMemo } from "react";
import * as style from "../styles/index.module.css";
import { graphql } from "gatsby";
import moment from "moment";
import Seo from "../components/seo/Seo";
import Menu from "../components/menu/Menu";
import Cell from "../components/cell/Cell";
import Tick from "../components/tick/Tick";
import Thumbnail from "../components/thumbnail/Thumbnail";
import Banner from "../components/banner/Banner";
import About from "../components/about/About";

const Index = ({ data }) => {
    const order = data.sanityAbout.order;
    const content = data.allSanityContent.nodes;
    const [time, setTime] = useState(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
    );
    const [active, setActive] = useState(null);
    const [about, setAbout] = useState(false);

    const getContent = useMemo(() => {
        const sortContent = content.reduce((result, current) => {
            if (isTimeBetween(current.start, current.end, time)) {
                result.push(current.thumbnail);
            }
            return result;
        }, []);
        return sortContent;
    }, [time, content]);

    useEffect(() => {
        setActive(getContent);
    }, [time, getContent]);

    useEffect(() => {
        const interval = setInterval(
            () =>
                setTime(
                    new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                    })
                ),
            60000
        );
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <Seo />
            <main className={style.container}>
                <Menu />
                <header className={style.header}>
                    <button
                        className={style.about}
                        onClick={() => {
                            setAbout((prevAbout) => !prevAbout);
                        }}
                    >
                        {about ? "Close" : "About"}
                    </button>
                </header>
                <About about={about} />
                <div className={style.wrapper}>
                    <div
                        className={style.gridText}
                        style={{ visibility: active ? "visible" : "hidden" }}
                    >
                        {order.map((order, i) => {
                            return <Cell key={i} index={i} order={order} />;
                        })}
                        <Tick direction={"toLeft"} offset={"0"} name={"cabin"} />
                        <Tick direction={"toRight"} offset={"100%"} name={"fever"} />
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.grid}>
                        {active &&
                            active[0].map((thumb) => {
                                return <Thumbnail key={thumb._key} image={thumb.asset} />;
                            })}

                        {active && <Thumbnail image={active[0][0].asset} />}
                        {active && <Thumbnail image={active[0][1].asset} />}
                    </div>
                </div>

                {/* <div className={style.wrapper} style={{ pointerEvents: "none" }}>
                    <div className={style.grid}>
                        {[...Array(18)].map((e, index) => (
                            <div key={index} className={style.border}></div>
                        ))}
                    </div>
                </div> */}

                <Banner />
            </main>
        </>
    );
};

export default Index;

export const query = graphql`
    query {
        sanityAbout {
            order
        }
        allSanityContent {
            nodes {
                start
                end
                thumbnail {
                    _key
                    asset {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;

const isTimeBetween = (startTime, endTime, serverTime) => {
    let start = moment(startTime, "H:mm");
    let end = moment(endTime, "H:mm");
    let server = moment(serverTime, "H:mm");
    if (end < start) {
        return (
            (server >= start && server <= moment("23:59:59", "h:mm:ss")) ||
            (server >= moment("0:00:00", "h:mm:ss") && server < end)
        );
    }
    return server >= start && server < end;
};
