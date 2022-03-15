import React from "react";
import style from "./Footer.module.css"
import Inst from "../../common/img/Links/Inst.png"
import vk from "../../common/img/Links/Vk.png"
import FB from "../../common/img/Links/Facebook.png"
import google from "../../common/img/Links/Google Play.png"
import apple from "../../common/img/Links/App Store.png"

const links = [vk, Inst, FB]
const linksApp = [google, apple]
const legalInformation = ['© Sionic', 'Правовая информация', 'Политика конфиденциальности']
export const Footer = () => {

    return (
        <div className={style.footerContainer}>
            <span className={style.title}>React</span>
            <div className={style.frameIconContact}>
                <span className={style.titleInfoLinks}>Присоединяйтесь к нам</span>
                <div className={style.linkContainer}>
                    {links.map(link => <a key={link} className={style.link} style={{backgroundImage: `url(${link})`}}
                                          href="https://sionic.ru/" target={"blank"}> </a>)}
                </div>
            </div>
            <div className={style.appLinks}>
                <span className={style.titleInfoApp}>Устанавливайте приложение</span>
                <div className={style.linksAPP}>
                    {linksApp.map(link => <a key={link} className={style.linksApp}
                                             style={{backgroundImage: `url(${link})`}} href="https://sionic.ru/" target={"blank"}> </a>)}
                </div>
            </div>
            <div className={style.SionikInfo}>
                {legalInformation.map(inf =>  <span key={inf} className={style.Information}>{inf}</span>)}
            </div>
        </div>
    )
}