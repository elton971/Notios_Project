import style from '../Styles/AddPage.module.css'
import op from "../Assents/op.svg"
import addInside from "../Assents/addInside.svg"
import showMore from "../Assents/showMore.svg"
import pageIcon from "../Assents/pageIcon.svg"





export const AddPage =()=>{
    return (
        <div className={style.addPageContainer}>
            <div className={style.addPageContent}>

                <div className={style.addPageContentTitle}>
                    <div  className={style.addPageContentTitleView}>
                        <img src={showMore} alt="showMore"  />

                        <img src={pageIcon} alt="pageIcon"  />
                        <p>Untitled</p>

                    </div>
                    <div  className={style.addPageContentTitleOption}>
                        <img src={op} alt="op"  />
                        <img src={addInside} alt="addInside"/>
                    </div>

                </div>

                <div className={style.addPageContentAddButton}>

                    <button className={style.settingsContentButton}>
                        <img src={addInside} alt="addInside"  />
                        <p>Add Page</p>
                    </button>

                </div>
            </div>
        </div>
    )
}
