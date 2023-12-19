import React from 'react'
import './Files.scss'
import files from '../../assets/icons/files_icon 41.svg'

const Files = () => {
    return (
        <div className="files">
            <p className=" files__title typogr_title">Файлы</p>
            <div className='files__start-content'>
                <div className="files__image">
                    <img src={files} alt="files icon" />
                </div>
                <p className="typogr_descr">
                    Закажи у личного помощника медиаплан. Он появится в этом
                    разделе
                </p>
            </div>
        </div>
    )
}

export default Files
