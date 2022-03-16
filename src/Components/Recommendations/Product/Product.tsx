import React from "react";
import style from "./Product.module.css"
import img from "../../../common/img/Product/Product.png"

const prod = ['-10%', '-10%','-10%','-10%','-10%', '-10%','-10%','-10%','-10%', '-10%','-10%','-10%','-10%', '-10%','-10%','-10%', ]
export const Product = () => {

    return (
        <div className={style.itemProduct}>

            {/*<div className={style.frameItems}>*/}
                {prod.map((item,i) => {
                    return (
                        <div  key={i} className={style.item}>
                            <button className={style.buttonAddItem}>
                                Добавить в корзину
                                {/*<span className={style.buttonName}></span>*/}
                            </button>
                            <div className={style.aboutItem}>
                                <div className={style.name}>
                                    <span className={style.aboutShop}>Длинное название товара в одну строчку п...</span>
                                    <span className={style.aboutLongName}>Длинное название товара в одну строчку п...</span>
                                </div>
                                <div className={style.price}>
                                    <span className={style.discount}>{item} </span>
                                    <div className={style.oldPriceGroup}>
                                        <span className={style.line}/>
                                        <span className={style.oldPrice}>450 500 ₽</span>
                                        <span className={style.totalPrice}>от 350 000 ₽</span>
                                    </div>
                                </div>
                                <div className={style.imgProduct}>
                                    {/*<div className={style.frameTag}>*/}
                                    {/*    <Tag/>*/}
                                    {/*</div>*/}
                                    <img className={style.imgProduct} src={img} alt=""/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            {/*</div>*/}


        </div>
    )
}