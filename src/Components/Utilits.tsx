import style from "../Styles/SettingContaner.module.css"
import quick from "../Assents/quick.svg"
import settingImg from "../Assents/settings.svg"
import trash from "../Assents/trash.svg"

export const Utilits=()=>{
    return(
        <div className={style.settingsContainer}>
            <div className={style.settingsContent}>
                <button className={style.settingsContentButton}>
                    <img src={quick} alt="quick"  />
                    <p>Templates</p>
                </button>
            </div>

            <div className={style.settingsContent} >
                <button className={style.settingsContentButton}>
                    <img src={settingImg} alt="settingImg"  />
                    <p>Import</p>
                </button>
            </div>

            <div className={style.settingsContent}>
                <button className={style.settingsContentButton}>
                    <img src={trash} alt="schedul"  />
                    <p>Trash</p>
                </button>
            </div>
        </div>
    )
}