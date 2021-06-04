import React, {useState} from 'react'
import * as style from "../styles/cell.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Ticker from "react-ticker";
import Cabin from "../images/cabin.svg"
import Fever from "../images/fever.svg"

const Cell = (props) => {
const [visible, setVisible] = useState(false)
const cabin = props.order === "CAB" || props.order === "BIN" ? true : false
const even = props.index % 2 === 0 ? true : false
const image = getImage(props.image.asset);

    return (
        <div
            className={style.container}
            onMouseEnter={() => setVisible((prevVisible) => !prevVisible)}
            role="presentation"
        >
            <div style={{ display: !visible ? "block" : "none" }} className={style.colour}>
                <GatsbyImage image={image} alt={"Webcam image"} />
            </div>
            <div style={{ display: visible ? "flex" : "none" }} className={style.text}>
                {props.index < 17 ? (
                    <img
                        style={{
                            paddingLeft: even && "25px",
                            paddingRight: !even && "25px",
                            left: even && "0",
                            right: !even && "0",
                        }}
                        className={style.image}
                        src={cabin ? Cabin : Fever}
                        alt="Cabin Fever"
                        draggable="false"
                    />
                ) : (
                    <Ticker>
                        {() => (
                            <img
                                style={{
                                    paddingLeft: even && "25px",
                                    paddingRight: !even && "25px",
                                    left: even && "0",
                                    right: !even && "0",
                                }}
                                className={style.image}
                                src={cabin ? Cabin : Fever}
                                alt="Cabin Fever"
                                draggable="false"
                            />
                        )}
                    </Ticker>
                )}
            </div>
        </div>
    );
}

export default Cell
