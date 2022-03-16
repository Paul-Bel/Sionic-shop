import React from "react";
import style from "./OrderHistory.module.css";
import {OrderHistory} from "./OrderHistory";

export const OrderStores = () => {
    return (
        <div className={style.historyContainer}>
            <OrderHistory/>
            <OrderHistory/>
        </div>
    )
}