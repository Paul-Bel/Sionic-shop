import React from "react";
import style from "./ButtonCustom.module.css"

export const ButtonCustom = () => {

    return (
        <div className={style.buttonContainer}>
            <div className={style.minus}>
                <div className={style.imgMinus}/>
            </div>
            <div className={style.plus}>
                <div className={style.plusGroup}>
                <div className={style.imgPlusOne}/>
                <div className={style.imgPlusTwo}/>
                </div>
            </div>
            <span className={style.value}>25</span> {/*передавать пропсами количество*/}
        </div>
    )
}