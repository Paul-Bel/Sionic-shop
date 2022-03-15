import React from "react";
import style from "./Recommendations.module.css"
import {Header} from "../Header/Header";
import {Settings} from "../Settings/Settings";
import {Tag} from "./Tags/Tag";

export const Recommendations = () => {


    return (
        <div className={style.RecommendationsContainer}>
            <Header/>
            <Settings/>
            <Tag/>


        </div>
    )
}