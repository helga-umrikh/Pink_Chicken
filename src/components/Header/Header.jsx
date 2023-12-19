import React from 'react'
import './Header.scss'
import logo from '../../assets/PinckChicken_logo.svg'
import percentage from '../../assets/icons/percentage.svg'
import user from '../../assets/icons/user.svg'
import settings from '../../assets/icons/settings.svg'
import login_icon from '../../assets/icons/login.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img
                    className="header__logo_item"
                    src={logo}
                    alt="pink chicken logo"
                />
            </div>
            <div className="header__menu">
                <div className="header__menu_percentage-sub">
                    <div className="header__menu_item">
                        <button className="header__menu_btn button_bold">
                            <img src={percentage} alt="Percentage icon" />
                        </button>
                        <p className="header__menu_sub typogr_sub">5%</p>
                        <p className="header__menu_sub-add typogr_sub">
                            выручки
                        </p>
                    </div>
                    <div className="header__menu_item button">
                        <button className="header__menu_btn button_bold">
                            <img src={user} alt="user icon" />
                        </button>
                        <p className="header__menu_sub typogr_sub">
                            Username@adaurum.ru
                        </p>
                    </div>
                </div>
                <div className="header__menu_settings-login-btn">
                    <button className="button_light">
                        <img src={settings} alt="settings icon" />
                    </button>
                    <button className="button_light">
                        <img src={login_icon} alt="login icon" />
                    </button>
                </div>
            </div>

            <div className='header__media-buttons'>
                <button className='header__media-buttons_media-plans button_monochrome '>Медиапланы</button>
                <button className='header__media-buttons_report button_monochrome'>Отчеты</button>
            </div>
        </div>
    )
}

export default Header
