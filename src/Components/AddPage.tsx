import style from '../Styles/AddPage.module.css'

import addInside from "../Assents/addInside.svg"

import { useState } from 'react'
import { NewPage } from './NewPage'

export const AddPage =()=>{
    
    const [show, setShow] = useState(false); //para visualizar a pagina
    return (
        <div className={style.addPageContainer}>
            <div className={style.addPageContent}>
                {
                    show ? <NewPage /> : null
                }
                <div className={style.addPageContentAddButton}>

                    <button className={style.settingsContentButton}
                    onClick={()=>{
                      setShow(!show)
                    }}
                    >
                        <img src={addInside} alt="addInside"  />
                        <p>Add Page</p>
                    </button>

                </div>
            </div>
        </div>
    )
}
