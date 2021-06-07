import React, { useState, useEffect } from "react";
import * as style from "../styles/home.module.css";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import Menu from "../components/menu";
import Cell from "../components/cell";
import Tick from "../components/tick";
import Thumbnail from "../components/thumbnail";
import Banner from "../components/banner";

const Home = ({ data }) => {
    const order = data.sanityAbout.order;
    const [time, setTime] = useState(new Date().getHours() * 60 + new Date().getMinutes());

    useEffect(() => {
        const interval = setInterval(
            () => setTime(new Date().getHours() * 60 + new Date().getMinutes()),
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
                <div className={style.wrapper}>
                    <div className={style.gridLarge}>
                        {order.map((order, i) => {
                            return <Cell key={i} index={i} order={order} />;
                        })}
                        <Tick direction={"toRight"} offset={"100%"} name={"cabin"} />
                        <Tick direction={"toLeft"} offset={"0"} name={"fever"} />
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.grid}>
                        {[...Array(16)].map((e, index) => (
                            <Thumbnail key={index} index={index} time={time} />
                        ))}
                        <Thumbnail index={0} time={time} />
                        <Thumbnail index={1} time={time} />
                    </div>
                </div>
                <div className={style.wrapper} style={{pointerEvents: "none"}}>
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
    }
`;
