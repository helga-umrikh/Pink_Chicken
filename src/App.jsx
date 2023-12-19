import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import Header from './components/Header/Header';
import MainPage  from "./pages/MainPage/MainPage"


function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={MainPage} />
            </Routes>
        </div>
    )
}

export default App
