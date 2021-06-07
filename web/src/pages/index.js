import React, { useState, useEffect } from "react";
import * as style from "../styles/home.module.css";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Menu from "../components/menu";
import Cell from "../components/cell";
import Tick from "../components/tick";
import Banner from "../components/banner";

const Home = ({ data }) => {
    const order = data.sanityAbout.order;
    const [time, setTime] = useState(new Date().getHours() * 60 + new Date().getMinutes());
    console.log(time);

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
            <SEO />
            <main className={style.container}>
                <Menu />
                <div className={style.wrapper}>
                    <div className={style.grid}>
                        {order.map((order, i) => {
                            return <Cell key={i} index={i} order={order} time={time} />;
                        })}
                        <Tick
                            direction={"toRight"}
                            offset={"100%"}
                            name={"cabin"}
                            index={0}
                            time={time}
                        />
                        <Tick
                            direction={"toLeft"}
                            offset={"0"}
                            name={"fever"}
                            index={1}
                            time={time}
                        />
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
