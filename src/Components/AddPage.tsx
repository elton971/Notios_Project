import style from '../Styles/AddPage.module.css'
import addInside from "../Assents/addInside.svg"
import { useState } from 'react'
import { NewPage } from './NewPage'
import { Navbar } from './Navbar.'

export const AddPage =()=>{
    
    const [newPage, setnewPage] = useState<any>([]); //para visualizar a pagina
    function addPagesTaskes(){
        console.log("ola")
        setnewPage([...newPage, <NewPage/>])
        
    }
    return (
        <div className={style.addPageContainer}>
            <div className={style.addPageContent}>
               {
                    newPage.map((navbar: any)=>{
                        return navbar;
                    })
               }
                <div className={style.addPageContentAddButton}>

                    <button className={style.settingsContentButton}
                    onClick={()=>{
                        addPagesTaskes()
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
