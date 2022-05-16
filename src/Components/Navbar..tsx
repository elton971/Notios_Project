import style from '../Styles/Navbar.module.css';
import op from "../Assents/op.svg"
import schedul from "../Assents/schedul.svg"
import mess from "../Assents/mess.svg"
import star from "../Assents/star.svg"


export const Navbar = () => {
    return (
        <div className={style.navbar__container}>
            <div className={style.navbar__Title__container}>
                <label className={style.navbar__Label}>Nome da janela</label>
                <input className={style.navbar__Title__input} type="text" placeholder="Nome da janela" />
            </div>
            <div className={style.navbar__button__container}>
                <span>Share</span>
                <img src={mess} alt=""/>

                <img src={schedul} alt=""/>

                <img src={star} alt=""/>

                <img src={op} alt="" />
                
            </div>
        </div>
    );
};