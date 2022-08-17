import React from 'react';
import { Link } from 'react-router-dom';
import CountingButtons from './CountingButtons';

const Product = ({data}) => {

    return (
        <div>
            <img src={data.image} alt="product" />
            <h3>{data.title}</h3>
            <p>{data.price}</p>
            <div>
                <Link to={`/products/${data.id}`}>Details</Link>
                {/* <div>
                    {!basket.space.find(item=>item.id === data.id)?<button onClick={()=> dispatch({type : 'ADD_ITEM', payload : data})}>Add to card</button>
                        : <button onClick={()=>dispatch({type : 'INCREASE', payload : data})}>+</button>    
                    }
                    {counter(basket , data)===1  && <button onClick={()=> dispatch({type : 'DELETE_ITEM', payload :data })}>trash</button>}
                    {counter(basket , data)>1 && <button onClick={()=> dispatch({type : 'DECREASE', payload :data })}>-</button>}
                </div> */}
                <CountingButtons data={data}/>
            </div>
        </div>
    );
};

export default Product;