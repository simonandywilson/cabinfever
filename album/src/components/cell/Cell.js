import React from "react";
import * as style from "./cell.module.css";
import Cabin from "../../images/cabin.svg";
import Fever from "../../images/fever.svg";

const Cell = (props) => {
    const cabin = props.order === "CABIN" ? true : false;

    return (
        <div className={style.container}>
            <div className={style.text}>
                <img
                    className={style.image}
                    src={cabin ? Cabin : Fever}
                    alt="Cabin Fever"
                    draggable="false"
                />
            </div>
        </div>
    );
};

export default Cell;
