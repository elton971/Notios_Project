import showMore from "../Assents/showMore.svg"
import pageIcon from "../Assents/pageIcon.svg"
import op from "../Assents/op.svg"
import addInside from "../Assents/addInside.svg"

import style from '../Styles/AddPage.module.css'

import { useContext, useState } from "react"
import { Context } from "../Context/ContextApi"

export const NewPage = () => {
   const {valueUp,valuers} = useContext(Context)
    return(
        <div
            className={style.addPageContentTitle}>
            <div  className={style.addPageContentTitleView}>
                <img src={showMore} alt="showMore"  />

                <img src={pageIcon} alt="pageIcon"  />
                <input type="text" name="tarefa" defaultValue={valuers}
                    placeholder={valuers}
                    onChange={(e)=>{
                        valueUp(e.target.value);
                    }
                }
                />

            </div>
            <div  className={style.addPageContentTitleOption}>
                <img src={op} alt="op"  />
                <img src={addInside} alt="addInside"/>
            </div>
        </div>
    )
}