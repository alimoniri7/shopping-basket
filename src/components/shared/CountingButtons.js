import React, { useContext } from 'react';
import { counter } from '../../helper/counter';
import { Basket } from '../context/basketProvider';

const CountingButtons = ({data}) => {
    let {basket , dispatch} = useContext(Basket);


    return (
        <div>
            {!basket.space.find(item=>item.id === data.id)
                ?<button onClick={()=> dispatch({type : 'ADD_ITEM', payload : data})}>Add to card</button>
                : <button onClick={()=>dispatch({type : 'INCREASE', payload : data})}>+</button>    
            }
            {counter(basket , data) >= 1 && <span>{counter(basket,data)}</span>}
            {counter(basket , data)===1  && <button onClick={()=> dispatch({type : 'DELETE_ITEM', payload :data })}>trash</button>}
            {counter(basket , data)>1 && <button onClick={()=> dispatch({type : 'DECREASE', payload :data })}>-</button>}
        </div>
    );
};

export default CountingButtons;