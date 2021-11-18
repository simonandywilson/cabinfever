import React, { useState, useEffect } from "react";
import ContextProvider from "../../state/GlobalState";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import About from "../about/About";
import Search from "../search/Search";
import Footer from "../footer/Footer";
import * as style from "./layout.module.css";

const Layout = ({ children }) => {
    const [about, setAbout] = useState(false);
    const [search, setSearch] = useState(false);
    
    return (
        <ContextProvider>
            <main className={style.layout}>
                <Menu />
                <Header about={about} setAbout={setAbout} setSearch={setSearch} />
                <About about={about} />
                <Search search={search} setSearch={setSearch} />
                {/* <section className={style.container} onClick={() => setSearch(false)}>
                    {children}
                </section> */}

                {children}

                <Footer />
            </main>
        </ContextProvider>
    );
};

export default Layout;
