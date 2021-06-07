import React, {useState} from "react";
import * as style from "../styles/tick.module.css";
import Ticker from "react-ticker";
import PageVisibility from "react-page-visibility";
import Thumbnail from "../components/thumbnail"
import Cabin from "../images/cabin.svg";
import Fever from "../images/fever.svg";

const Tick = (props) => {
    const [pageIsVisible, setPageIsVisible] = useState(true);
    const [visible, setVisible] = useState(false);
    const handleVisibilityChange = (isVisible) => {
        setPageIsVisible(isVisible);
    };
    return (
        <div
            className={style.container}
            onMouseEnter={() => setVisible((prevVisible) => !prevVisible)}
            role="presentation"
        >
            <div className={style.thumbnail}>
                <Thumbnail index={props.index} visible={visible} time={props.time} />
            </div>

            <div className={style.wrapper}>
                <div className={style.wrapper}>
                    <PageVisibility onChange={handleVisibilityChange}>
                        {pageIsVisible && (
                            <Ticker direction={props.direction} offset={props.offset} speed={10}>
                                {() => (
                                    <img
                                        className={style.image}
                                        src={props.name === "cabin" ? Cabin : Fever}
                                        alt="Cabin Fever"
                                        draggable="false"
                                    />
                                )}
                            </Ticker>
                        )}
                    </PageVisibility>
                </div>
            </div>
        </div>
    );
};

export default Tick;