import React from "react";
import style from "./Delivery.module.css"
import location from "../../common/img/Links/navigation.png"

export const Delivery = () => {

    return (
        <div className={style.deliveryContainer}>
            <div className={style.timeDelivery}>
                <div className={style.editTime}>
                    <span className={style.editData}>Выберите дату</span>
                    <span className={style.editTimes}>Выберите время</span>
                </div>
                <span className={style.editVar}>Когда доставить?</span>
            </div>

            <div className={style.containerWhere}>
                <div className={style.location}>
                    <img className={style.img} src={location} alt=""/>
                    <input className={style.locationInput} placeholder={"Выберите адрес доставки"}/>
                </div>
                <span className={style.whereLocation}>Куда доставить?</span>
            </div>
            <div className={style.customerName}>
                <span className={style.customerTitle}>Имя</span>
                <input className={style.inputName}/>
            </div>
            <div className={style.customerPhone}>
                <span className={style.customerTitle}>Телефон</span>
                <input className={style.inputName}/>
            </div>
            <div className={style.orderCost}>
                <div className={style.frameAria}></div>


                <div className={style.orderField}>
                    <div className={style.aboutOrder}>
                        <div className={style.cost}>
                            <div className={style.shippingСost}>
                                <span className={style.costs}>Стоимость товаров:</span>
                                <span className={style.costs}>200 584₽</span>
                            </div>
                            <div className={style.shippingСost}>
                                <span className={style.costs}>Стоимость доставки:</span>
                                <span className={style.costs}>200₽</span>
                            </div>
                        </div>

                        <div className={style.total}>
                            <span className={style.totalTitle}>Итого:</span>
                            <span className={style.totalCost}>200 784₽</span>
                        </div>

                    </div>


                    <button className={style.buttonAddItem}>Сделать заказ</button>
                </div>

            </div>
        </div>
    )
}