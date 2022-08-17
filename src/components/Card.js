import React, { useContext } from 'react';
import { Basket } from './context/basketProvider';
import Preview from './shared/Preview';

import { Link } from 'react-router-dom'

const Card = () => {

    const {basket , dispatch} = useContext(Basket)
    
    return (
        <div>
            <div>
                {basket.space.map(item => <Preview data={item}/>)}
            </div>

            {basket.checkout &&<div>
                    <h2>You checked out successfully</h2>
                    <Link to='/products'>Back to shop</Link>
                    </div> 
            }

            {!basket.checkout && basket.totalSelected>0 && <div>
                            <div>
                                <span>Total Items : </span>
                                <span>{basket.totalSelected}</span>
                            </div>
                            <div>
                                <span>Total Payments : </span>
                                <span>{basket.totalPrice} $</span>
                            </div>
                            <div>
                                <button onClick={()=> dispatch({type:'CHECKOUT'})}>Checkout</button>
                                <button onClick={()=> dispatch({type: 'CLEAR'})}>Clear</button>
                            </div>
                        </div>
            }

            {!basket.checkout && basket.totalSelected===0 && <div>
                            <h2>Your basket is empty!</h2>
                            <Link to='/products'>Back to shop</Link>
                        </div>
            }
        </div>
    );
};

export default Card;