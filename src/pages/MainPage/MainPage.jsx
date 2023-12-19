import React from 'react'
import './MainPage.scss'
import Files from '../../components/Files/Files'
import PersonalAssistant from '../../components/PersonalAssistant/PersonalAssistant'

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="main-page__container">
                <Files />
                <PersonalAssistant />
            </div>
        </div>
    )
}

export default MainPage
