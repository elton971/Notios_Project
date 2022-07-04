// @flow 
import { useContext } from 'react';
import { Context } from '../Context/ContextApi';
import style from '../Styles/Tasks.module.css';

export const Tasks = () => {
    const {valueUp,valuers} = useContext(Context)
    return (
        <div className={style.tasks__container}>
            <div className={style.tasks__list}>
                <div className={style.tasks__Title}>
                    <input className={style.navbar__Title__input} type="text"
                        placeholder={valuers}
                        onChange={(e)=>{
                            valueUp (e.target.value);
                        }
                    }
                    />
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