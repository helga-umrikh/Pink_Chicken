import React from 'react'
import './Footer.scss'
import logo_gray from '../../assets/icons/logo-gray.svg'
import mail from '../../assets/icons/sms-tracking.svg'
import world from '../../assets/icons/global.svg';
import telegram from '../../assets/icons/telegram.svg';
import whatsapp from '../../assets/icons/Whatsapp.svg';

const Footer = () => {
    const openTelegram = () => {
        window.location.href = "tg://msg?text=Hello%20there";
    }

    const openWhatsApp = () => {
        window.location.href = "https://wa.me/1234567890";
    }

    const openMail = () => {
        window.location.href = "mailto:support@example.com?subject=SendMail&body=Description";
    }

    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__logo">
                    <img src={logo_gray} alt="gray pink chicken logo" />
                </div>
                <div className="footer__policy-contacts">
                    <p className="footer__policy-contacts_policy typogr_contacts">
                        Политика конфиденциальности
                    </p>
                    <div className="footer__policy-contacts_mail" onClick={openMail}>
                        <div className="footer__policy-contacts_mail-icon">
                            <img src={mail} alt="mail icon" />
                        </div>
                        <p className="typogr_contacts">
                            pinkchicken@adaurum.ru
                        </p>
                    </div>
                </div>
                <div className="footer__lang-bar">
                    <div className="footer__lang-bar_item">
                        <img src={world} alt="world icon" />
                    </div>

                    <button className=" footer__lang-bar_item button_transparent typogr_contacts">
                        RU
                    </button>
                    <button className="footer__lang-bar_item button_transparent typogr_contacts">
                        EN
                    </button>
                    <button className="footer__lang-bar_item button_transparent typogr_contacts">
                        TUR
                    </button>
                </div>
                <div className='footer__social'>
                    <div onClick={openTelegram}>
                        <img src={telegram} alt='telegram icon'/>
                    </div>
                    <div className='footer__social_whatsapp' onClick={openWhatsApp}>
                        <img src={whatsapp} alt='whatsapp icon'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
