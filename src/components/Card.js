import React, { useContext } from 'react';
import { Basket } from './context/basketProvider';
import Preview from './shared/Preview';

import { Link } from 'react-router-dom'

import styles from './card.module.scss'

const Card = () => {

    const {basket , dispatch} = useContext(Basket)
    
    return (
        <div className={styles.container}>
            <div>
                {basket.space.map(item => <Preview key={item.id} data={item}/>)}
            </div>

            {basket.checkout &&<div className={styles.response}>
                    <h2>You checked out successfully!</h2>
                    <Link to='/products'>Back to shop</Link>
                    </div> 
            }

            {!basket.checkout && basket.totalSelected>0 && <div>
                            <div className={styles.total}>
                                <span>Total Items : </span>
                                <span>{basket.totalSelected}</span>
                            </div>
                            <div className={styles.total}>
                                <span>Total Payments : </span>
                                <span>{basket.totalPrice} $</span>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button onClick={()=> dispatch({type: 'CLEAR'})}>Clear</button>
                                <button onClick={()=> dispatch({type:'CHECKOUT'})}>Checkout</button>
                            </div>
                        </div>
            }

            {!basket.checkout && basket.totalSelected===0 && <div className={styles.response}>
                            <h2>Your basket is empty!</h2>
                            <Link to='/products'>Back to shop</Link>
                        </div>
            }
        </div>
    );
};

export default Card;