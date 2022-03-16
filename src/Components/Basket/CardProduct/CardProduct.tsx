import React from "react";
import style from "./CardProduct.module.css"
import prodCard from "../../../common/img/ProdCard/ProdCard.png"
import {ButtonCustom} from "../../../common/Button/ButtonCustom";

type LinePropsType = {
    line?: boolean
}
export const CardProduct = (props: LinePropsType) => {

    return (
        <div className={style.cardContainer}>
            <div className={style.card}>
                <img className={style.img} src={prodCard} alt=""/>
                <div className={style.frameDescriptionBye}>
                    <div className={style.Interest}>
                        <div className={style.descrItem}>
                            Смартфон Xiaomi Redmi Note 8 Pro 6/128GB, белый
                        </div>
                        <div className={style.price}>
                            <span className={style.priceHere}>от 350 000 ₽</span>
                            <span className={style.priceDiscount}>от 350 000 ₽</span>
                            <span className={style.linePrice}/>
                        </div>
                        <div className={style.delete}></div>
                        <ButtonCustom/>
                    </div>
                    <div className={style.purchase}>
                        <div className={style.aboutBye}>
                            <span className={style.number}> 120 шт.</span>
                            <span className={style.time}>за 12:48:35 </span>
                        </div>
                        <span className={style.bye}>Куплено: <span style={{fontWeight: "bold", marginLeft: "2px"}}>150 шт.</span></span>
                    </div>
                </div>
            </div>
            {!props.line && <div className={style.line}/>}


        </div>
    )
}