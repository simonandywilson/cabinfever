import React from "react";
import * as style from "../styles/banner.module.css";
import Ticker from "react-ticker";

const Banner = () => {
    return (
        <main className={style.banner}>
            <div className={style.wrapper}>
                <Ticker>
                    {() => (
                        <>
                            <h4>
                                CABIN FEVER PROTOTYPE LIVESTREAM AT FOLDA
                                FESTIVAL 12/06/21 12:00–12:00 PROTOTYPE LIVESTREAM AT
                                FOLDA 12/06/21 12:00–12:00
                            </h4>
                        </>
                    )}
                </Ticker>
            </div>
        </main>
    );
};

export default Banner;
