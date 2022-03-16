import React from "react";
import style from "./Basket.module.css"
import img1 from "../../common/img/Basket/Group.png"
import img2 from "../../common/img/Basket/Group1.png"
import img3 from "../../common/img/Basket/Group2.png"
import {CardProduct} from "./CardProduct/CardProduct";

export const Basket = () => {

    return (
        <div className={style.basketContainer}>
            <div className={style.frame}>
                <div className={style.basketHeader}>
                    <span className={style.title}>Xiaomi</span>
                    <div className={style.framePrice}>
                        <span className={style.priceTitle}>Стоимость корзины:</span>
                        <span className={style.price}>1 185 000₽ </span>

                    </div>
                    <button className={style.makeOrder}>Оформить</button>
                    <img className={style.imgOne} src="" alt=""/>

                </div>
                <div className={style.imgGroup}>
                    <img src={img1} className={style.imgOne}/>
                    <img src={img2} className={style.imgTwo}/>
                    <img src={img3} className={style.imgFree}/>
                </div>
                <div className={style.ordersFrame}>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct line={true}/>
                </div>
            </div>
        </div>
    )
}