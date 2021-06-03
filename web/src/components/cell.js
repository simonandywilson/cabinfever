import React, {useState} from 'react'
import * as style from "../styles/cell.module.css";
import Cab from "../images/cab.svg"
import Bin from "../images/bin.svg";
import Fev from "../images/fev.svg";
import Ver from "../images/ver.svg";

import Cabin from "../images/cabin.svg"


const Cell = (props) => {
const [visible, setVisible] = useState(false)

    return (
        <div
            className={style.container}
            onMouseEnter={() => setVisible((prevVisible) => !prevVisible)}
            role="presentation"
        >
            {visible ? <div className={style.colour}></div> : null}
            {!visible ? (
                <div className={style.text}>
                    <img className={style.image} src={Cab} alt="Cabin Fever" draggable="false" />
                </div>
            ) : null}
        </div>
    );
}

export default Cell
