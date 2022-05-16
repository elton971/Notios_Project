// @flow 
import style from '../Styles/Tasks.module.css';

export const Tasks = () => {
    return (
        <div className={style.tasks__container}>
            <div className={style.tasks__list}>
                <div className={style.tasks__Title}>
                    <input className={style.navbar__Title__input} type="text" placeholder="Nome da janela" />
                </div>
                <div className={style.tasks__list__item}>
                    <ul className={style.tasks__list__item_ul}>
                        <input type="checkbox" />
                        <li>Task 1</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};