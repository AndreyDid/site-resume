import React from "react";
import classes from "./aboutMe.module.css"
import avatar from '../../assets/images/1.jpg'

const AboutMe = () => {

    function getAge(date) {
        const number = Math.floor(
            (new Date() - new Date(date).getTime()) / (24 * 3600 * 365.25 * 1000)
        );
        const lastOne = Number(number.toString().slice(-1));
        if (number > 4 && number < 15) {
            return `${number} лет`;
        }
        if (lastOne === 1) return `${number} год`;
        if ([2, 3, 4].indexOf(lastOne) >= 0) return `${number} года`;
        return `${number} лет`;
    }

    return (
        <div className={classes.aboutMe}>
            <img src={avatar} alt="avatar" className={classes.avatarImg}/>
            <div>
                <h1>Андрей Диденко</h1>
                <h3>ФРОНТЭНД-РАЗРАБОТЧИК</h3>
                <p>14 июля 1991 г. ({getAge('1991-07-14')})</p>
                <p>Россия / Курск</p>
                <hr/>
                <p>Приветствую! Меня зовут Андрей, специализируюсь на работе в области Frontend Development. Моей главной целью является создание качественного пользовательского интерфейса, который будет лёгким в использовании и привлекательным для пользования.</p>
            </div>
        </div>
    )
}
export default AboutMe