import React from "react";
import email from '../../assets/images/email.png'
import github from '../../assets/images/github.png'
import telegram from '../../assets/images/telegram.png'
import hh from '../../assets/images/hh.png'
import classes from './conrtacts.module.css'

const Contacts = () => {
    return (
        <div id="scrollspyContacts">
            <h1 className={classes.title}>Контакты</h1>
            <div className={classes.contacts}>
                <a href="mailto:andreydidenk0@yandex.ru" target="_blank" rel="noreferrer"
                   className={classes.social}><img src={email} alt="email"
                                                   className={classes.contactsIcon}/></a>

                <a href="https://github.com/AndreyDid" target="_blank" rel="noreferrer" className={classes.social}><img
                    src={github} alt="github"
                    className={classes.contactsIcon}/></a>


                <a href="https://t.me/AndreyDidenk0" target="_blank" rel="noreferrer" className={classes.social}><img
                    src={telegram} alt="telegram"
                    className={classes.contactsIcon}/></a>

                <a href="https://kursk.hh.ru/resume/503542d2ff09a849fb0039ed1f744c77667055" target="_blank"
                   rel="noreferrer" className={classes.social}><img src={hh} alt="telegram"
                                                                    className={classes.contactsIcon}/></a>

            </div>
        </div>
    )
}
export default Contacts