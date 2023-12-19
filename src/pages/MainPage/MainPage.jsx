import React from 'react'
import './MainPage.scss'
import Files from '../../components/Files/Files'

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="main-page__container">
              <Files />
            </div>
        </div>
    )
}

export default MainPage
