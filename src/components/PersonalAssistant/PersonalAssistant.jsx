import React from 'react'
import './PersonalAssistant.scss'
import assistant from '../../assets/icons/admin-girl.svg'

const PersonalAssistant = () => {
    return (
        <div className="pers-assistant">
            <div className="pers-assistant__header">
                <div className="pers-assistant__header_info">
                    <p className="typogr_title">Личный помощник</p>
                    <div className="pers-assistant__acc-bar">
                        <p className="pers-assistant__user-name typogr_sub">
                            Jim Davidson
                        </p>
                        <p className="typogr_addit">Jim Davidson@adaurum.ru</p>
                    </div>
                </div>
                <button className="pers-assistant__drop-down-btn">
                    <div className="pers-assistant__drop-down-btn_container">
                        <figure className="pers-assistant__drop-down-btn_dots"></figure>
                        <figure className="pers-assistant__drop-down-btn_dots"></figure>
                        <figure className="pers-assistant__drop-down-btn_dots"></figure>
                    </div>
                </button>
            </div>
            <div className="pers-assistant__main">
                <div className="pers-assistant__main_chat-content">
                    <div className="pers-assistant__main_greeting">
                        <div className='pers-assistant__main_image'>
                            <img src={assistant} />
                        </div>
                        <p className="typogr_descr">
                            Это чат с администратором. Ты можешь с ним
                            пообщаться по любому вопросу о нашем сервисе и
                            узнать о ходе работы
                        </p>
                    </div>
                    <div className='pers-assistant__main_dialogue'></div>
                </div>
            </div>
        </div>
    )
}

export default PersonalAssistant
