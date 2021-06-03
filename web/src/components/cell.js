import React, {useState} from 'react'
import * as style from "../styles/cell.module.css";

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
                    <img className={style.image} src={`${props.order}.svg`} alt="Cabin Fever" draggable="false" />
                </div>
            ) : null}
        </div>
    );
}

export default Cell
