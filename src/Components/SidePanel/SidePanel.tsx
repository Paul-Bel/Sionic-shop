import React from "react";
import style from "./SidePanel.module.css"
import SL0 from "../../common/img/Slide/SL5.png"
import SL1 from "../../common/img/Slide/SL1.png"
import SL2 from "../../common/img/Slide/SL2.png"

export const SidePanel = () => {

    return (
        <div className={style.sideContainer}>
            <div className={style.slidePanel}>
<div className={style.banner} style={{backgroundImage:`url(${SL0})`}}></div>
<div className={style.banner} style={{backgroundImage:`url(${SL1})`}}></div>
<div className={style.banner} style={{backgroundImage:`url(${SL2})`}}></div>
<div className={style.banner} style={{backgroundImage:`url(${SL1})`}}></div>
            </div>

        </div>
    )
}