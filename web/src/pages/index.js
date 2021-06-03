import * as React from "react";
import * as style from "../styles/home.module.css";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Menu from "../components/menu";
import Cell from "../components/cell";
import Banner from "../components/banner";

const Home = ({ data }) => {
    const content = data.sanityContent;
    return (
        <main className={style.container}>
            <Menu />
            <div className={style.wrapper}>
                <div className={style.grid}>
                    {content.order.map((order, i) => {
                        return <Cell key={i} order={order}/>;
                    })}

                    {/* {[...Array(16)].map((e, i) => (
                        <Cell key={i} />
                    ))} */}
                </div>
            </div>
            <Banner />
        </main>
    );
};

export default Home;

export const query = graphql`
    query {
        sanityContent {
            order
        }
    }
`;
