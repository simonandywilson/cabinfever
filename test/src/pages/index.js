import React, { useState, useEffect, useMemo } from "react";
import * as style from "../styles/home.module.css";
import { graphql } from "gatsby";
import moment from "moment";
import Seo from "../components/seo";
import Menu from "../components/menu";
import Cell from "../components/cell";
import Tick from "../components/tick";
import Thumbnail from "../components/thumbnail";
import Banner from "../components/banner";

const Home = ({ data }) => {
    const order = data.sanityAbout.order;
    const content = data.allSanityContent.nodes;
    let current = [];
    // const [time, setTime] = useState(
    //     new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
    // );
    const [time, setTime] = useState("9:00");

    const getContent = useMemo(() => {
        const sortContent = content.reduce((result, current) => {
            if (isTimeBetween(current.start, current.end, time)) {
                result.push(current.thumbnail);
            }
            return result;
        }, []);
        return sortContent;
    }, [time, content]);

    const [active, setActive] = useState(() => {
        const sortContent = content.reduce((result, current) => {
            if (isTimeBetween(current.start, current.end, time)) {
                console.log(current.thumbnail);
                result.push(current.thumbnail);
            }
            return result;
        }, []);
        return sortContent;
    });

    useEffect(() => {
        setActive(getContent);
    }, [time, getContent]);

    // useEffect(() => {
    //     const interval = setInterval(
    //         () =>
    //             setTime(
    //                 new Date().toLocaleTimeString([], {
    //                     hour: "2-digit",
    //                     minute: "2-digit",
    //                     hour12: false,
    //                 })
    //             ),
    //         60000
    //     );
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    useEffect(() => {
        const interval = setInterval(() => setTime("03:00"), 10000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <Seo />
            <main className={style.container}>
                <Menu />
                <div className={style.wrapper}>
                    <div className={style.gridLarge}>
                        {order.map((order, i) => {
                            return <Cell key={i} index={i} order={order} />;
                        })}
                        <Tick direction={"toLeft"} offset={"0"} name={"cabin"} />
                        <Tick direction={"toRight"} offset={"100%"} name={"fever"} />
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.grid}>
                        {active[0].map((thumb) => {
                            return <Thumbnail key={thumb._key} image={thumb.asset} />;
                        })}
                        <Thumbnail image={active[0][0].asset} />
                        <Thumbnail image={active[0][1].asset} />
                    </div>
                </div>
                <div className={style.wrapper} style={{ pointerEvents: "none" }}>
                    <div className={style.grid}>
                        {[...Array(18)].map((e, index) => (
                            <div key={index} className={style.border}></div>
                        ))}
                    </div>
                </div>

                <Banner />
            </main>
        </>
    );
};

export default Home;

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
