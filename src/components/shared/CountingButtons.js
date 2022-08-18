import React, { useContext } from 'react';
import { counter } from '../../helper/counter';
import { Basket } from '../context/basketProvider';
import styles from './counterButtons.module.scss'

import trash from '../../assets/svg/icons8-trash.svg'

const CountingButtons = ({data}) => {
    let {basket , dispatch} = useContext(Basket);


    return (
        <div className={styles.container}>
            {!basket.space.find(item=>item.id === data.id)
                &&<button className={styles.addToCard} onClick={()=> dispatch({type : 'ADD_ITEM', payload : data})}>Add to card</button>
            }
            <div className={styles.buttons}>
                <div className={styles.buttonContainer}>
                    {basket.space.find(item=>item.id === data.id)
                        && <button className={styles.plus} onClick={()=> dispatch({type : 'INCREASE' , payload : data})}>+</button>
                    }
                    {counter(basket , data) >= 1 && <p className={styles.counter}>{counter(basket,data)}</p>}
                    {counter(basket , data)===1  && <button className={styles.trash} onClick={()=> dispatch({type : 'DELETE_ITEM', payload :data })}> <img  src={trash} alt="trash" /> </button>}
                    {counter(basket , data)>1 && <button className={styles.plus} onClick={()=> dispatch({type : 'DECREASE', payload :data })}>-</button>}
                </div>
            </div>
        </div>
    );
};

export default CountingButtons;