import React from "react";
import style from "./Tag.module.css"

const itemNameColor = [{"Игрушка": " #2967FF"}, {"Мартышка":" #58CF18"}, {"Мишка":" #FFA601"},
    {"Подарок":" #FF7CB4"}, {"Подарок коллегам":" #FF7CB4"}, {"День Рождения Гриши": " #fff"}]

export const Tag = () => {

    return (
        <div className={style.tagContainer}>
            <div className={style.buttonGroup}>
                {itemNameColor.map((but, i) => {
                    let bgColor = Object.values(but).toString()
                    let nameButton = Object.keys(but).toString()
                    let color = bgColor!==" #fff" ? ["#FFFFFF"].toString() : "black"
                    return <button key={i} style={
                        {backgroundColor: `${bgColor}`, color:`${color}`}}
                    className={style.button}>
                        {nameButton}</button>
                })}
            </div>

        </div>
    )
}