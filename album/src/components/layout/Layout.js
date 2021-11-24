import React, { useState, useEffect } from "react";
import ContextProvider from "../../state/GlobalState";
import Seo from "../seo/Seo";
import Menu from "../menu/Menu";

import * as style from "./layout.module.css";

const Layout = ({ children }) => {
    
    
    return (
        <ContextProvider>
            <Seo />
            <main className={style.layout}>
                <Menu />
                {children}
                
            </main>
        </ContextProvider>
    );
};

export default Layout;
