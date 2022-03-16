import React from "react";
import style from "./OrderHistory.module.css"
import shop from "../../common/img/Shop/ShopLogo.png"
import copy from "../../common/img/Shop/Copy.png"


export const OrderHistory = () => {

    return (
        <>

            <div className={style.frameHistory}>
                <div className={style.chevronUp}/>
                <div className={style.shopName}>
                    <img className={style.shopLogo} src={shop} alt=""/>
                    <span className={style.titleShopName}>Xiaomi</span>
                </div>
                <div className={style.DetailedDescription}>
                    <span className={style.data}>21.12.2020</span>
                    <span className={style.detail}>Подробнее</span>
                </div>
                <div className={style.descriptions}>
                    <div className={style.status}>
                        <div className={style.final}>
                            <span className={style.fStatus}>Статус заказа</span>
                            <span className={style.isStatus}>Оплачен/Завершён</span>
                        </div>
                        <div className={style.number}>
                            <span className={style.orderNumber}>Номер заказа</span>
                            <div className={style.copyNumber}>
                                <span className={style.numberName}>#664-333</span>
                                <img className={style.copy} src={copy} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={style.about}>
                        <div className={style.amount}>
                            <span className={style.titleAbout}> Кол-во товаров</span>
                            <span className={style.descrAbout}> 4 шт.</span>
                        </div>
                        <div className={style.amount}>
                            <span className={style.titleAbout}> Стоимость заказа</span>
                            <span className={style.descrAbout}> 250 000₽</span>
                        </div>
                        <div className={style.amount}>
                            <span className={style.titleAbout}> Адрес доставки</span>
                            <span className={style.descrAbout}> ул. Коммунистич...д.1, стр.1</span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}