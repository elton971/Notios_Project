import style from '../Styles/ButtonAdd.module.css'
import addInside from "../Assents/addInside.svg"
export const ButtonAdd = () => {
    return (
        <div className={style.addPageContentAddButton}> 
            <button className={style.settingsContentButton}>
                <img src={addInside} alt="addInside"  />
                <p>Add Page</p>
            </button>
        </div>
    );
};