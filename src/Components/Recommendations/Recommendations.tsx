import React from "react";
import style from "./Recommendations.module.css"
import {Header} from "../Header/Header";
import {Settings} from "../Settings/Settings";
import {Tag} from "./Tags/Tag";
import {Product} from "./Product/Product";

export const Recommendations = () => {


    return (
        <div className={style.RecommendationsContainer}>
            <Tag/>
            <div className={style.productContainer}>
                <Product/>
                <button className={style.buttonAddItem}>Показать больше товаров</button>
            </div>

        </div>
    )
}