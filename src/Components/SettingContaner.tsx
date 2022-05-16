import style from "../Styles/SettingContaner.module.css";
import quick from "../Assents/quick.svg"
import settingImg from "../Assents/settings.svg"
import schedul from "../Assents/schedul.svg"

export const SettingContaner=()=>{
    return(
        <div className={style.settingsContainer}>
            <div className={style.settingsContent}>
                <button className={style.settingsContentButton}>
                    <img src={quick} alt="quick"  />
                    <p>Quick find</p>
                </button>
            </div>

            <div className={style.settingsContent} >
                <button className={style.settingsContentButton}>
                    <img src={settingImg} alt="settingImg"  />
                    <p>All updates</p>
                </button>
            </div>

            <div className={style.settingsContent}>
                <button className={style.settingsContentButton}>
                    <img src={schedul} alt="schedul"  />
                    <p>Settings & Members</p>
                </button>
            </div>
        </div>
    )
}