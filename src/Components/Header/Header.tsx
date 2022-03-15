import React from 'react';
import style from "./Header.module.css"
import ava from "../../common/img/image 17avatar.png"
import loc1 from "../../common/img/Vectorloc1.png"
import loc from "../../common/img/Vectorlocation.png"
import BV1 from "../../common/img/VectorButtonV1.png"
import BV2 from "../../common/img/VectorButtonV2.png"
import bEllipse from "../../common/img/basketEllipse.png"
import basket1 from "../../common/img/Basket1.png"
import basket2 from "../../common/img/Basket2.png"
import basket3 from "../../common/img/Basket3.png"

const placeholder = <span className={style.placeholder}>'Поиск бренда, товара, категории...'</span>
export const Header = () => {

    return (
        <div className={style.HeaderContainer}>
            <div className={style.title}> React</div>
            <div className={style.frame}>
                <div className={style.location}>Александровск-Са...</div>
                <div className={style.icon}>
                    <div className={style.iconLocGroup}>
                        <img className={style.vectorOne} src={loc1} alt=""/>
                        <img className={style.vectorTwo} src={loc} alt=""/>
                    </div>
                </div>
            </div>
            <div className={style.auth}>
                <img className={style.avatar} src={ava} alt=""/>
                <div className={style.shoppingCart}>
                    <span className={style.itemsOfCart}> 10+</span>
                    <div className={style.ellipse}></div>
                </div>
                <div className={style.basket}>
                    <div className={style.iconBasket}>
                        <div className={style.basketGroup}>
                            <img className={style.basketIMG1} src={basket1} alt=""/>
                            <img className={style.basketIMG2} src={basket2} alt=""/>
                            <img className={style.basketIMG3} src={basket3} alt=""/>
                        </div>
                        <img className={style.BasketEllipse} src={bEllipse} alt=""/>
                    </div>
                </div>
                <div className={style.inputFindGroup}>
                    {placeholder}
                    <input className={style.inputFind}  placeholder={'Поиск бренда, товара, категории...'}/>
                    <button className={style.buttonFrame}>
                        <div className={style.frameButtonForIco}>
                            <div className={style.icoButtonGroup}>
                                <img className={style.buttonV1} src={BV1} alt=""/>
                                <img className={style.buttonV2} src={BV2} alt=""/>
                            </div>

                        </div>

                    </button>
                </div>

            </div>
        </div>
    )
}