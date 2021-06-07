import React, {useState} from 'react'
import * as style from "../styles/cell.module.css";
import Thumbnail from "../components/thumbnail"
import Cabin from "../images/cabin.svg"
import Fever from "../images/fever.svg"

const Cell = (props) => {
const [visible, setVisible] = useState(false)
const cabin = props.order === "CAB" || props.order === "BIN" ? true : false
const even = props.index % 2 === 0 ? true : false

    return (
        <div
            className={style.container}
            onMouseEnter={() => setVisible((prevVisible) => !prevVisible)}
            role="presentation"
        >
            <Thumbnail index={props.index} visible={visible} time={props.time} />
            <div style={{ display: visible ? "flex" : "none" }} className={style.text}>
                <img
                    style={{
                        paddingLeft: even && "40px",
                        paddingRight: !even && "40px",
                        left: even && "0",
                        right: !even && "0",
                    }}
                    className={style.image}
                    src={cabin ? Cabin : Fever}
                    alt="Cabin Fever"
                    draggable="false"
                />
            </div>
        </div>
    );
}

export default Cell
