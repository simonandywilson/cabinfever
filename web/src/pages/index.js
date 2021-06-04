import * as React from "react";
import * as style from "../styles/home.module.css";
import { graphql } from "gatsby";
import Menu from "../components/menu";
import Cell from "../components/cell";
import Tick from "../components/tick";
import Banner from "../components/banner";

const Home = ({ data }) => {
    const content = data.allSanityContent.nodes;
    const order = data.sanityAbout.order

    return (
        <main className={style.container}>
            <Menu />
            <div className={style.wrapper}>
                <div className={style.grid}>
                    {order.map((order, i) => {
                        return (
                            <Cell key={i} index={i} order={order} image={content[1].thumbnail[i]} />
                        );
                    })}
                    <Tick direction={"toLeft"} offset={0}/>
                    <Tick direction={"toRight"} offset={"100%"}/>
                </div>
            </div>
            <Banner />
        </main>
    );
};

export default Home;

export const query = graphql`
    query {
        allSanityContent {
            nodes {
                thumbnail {
                    asset {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
        sanityAbout {
            order
        }
    }
`;
