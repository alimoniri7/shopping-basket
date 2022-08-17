import React, { useContext } from 'react';
import {useParams} from 'react-router-dom'
import { ApiData } from '../context/ApiProvider';
import {Link} from 'react-router-dom'
import CountingButtons from './CountingButtons';

const Detail = () => {
    let data = useContext(ApiData)
    let params = useParams()

    let product = data[params.id-1]

    // let block = <div>
    //     <img src={item.image} alt="" />
    //     <div>
    //         <h3>{item.title}</h3>
    //         <p>{item.description}</p>
    //         <div>
    //             <span>Category : </span>
    //             <span>{item.category}</span>
    //         </div>
    //          <div>
    //             <span>{item.price} $</span>
    //             <Link to='/products'>back to shop</Link>
    //          </div>
    //     </div>
    // </div>

    return (
        <div>
            {data.length 
            ? <div>
                <img src={product.image} alt="" />
                <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <div>
                        <div>
                            <span>Category : </span>
                            <span>{product.category}</span>
                        </div>
                        {/* <div>
                            {!basket.space.find(item=>item.id === product.id)?<button onClick={()=> dispatch({type : 'ADD_ITEM', payload : product})}>Add to card</button>
                            : <button onClick={()=>dispatch({type : 'INCREASE', payload : product})}>+</button>    
                            }
                            {counter(basket , product)===1  && <button onClick={()=> dispatch({type : 'DELETE_ITEM', payload :product })}>trash</button>}
                            {counter(basket , product)>1 && <button onClick={()=> dispatch({type : 'DECREASE', payload :product })}>-</button>}
                        </div> */}
                        <CountingButtons data={product} />
                    </div>
                     <div>
                        <span>{product.price} $</span>
                        <Link to='/products'>back to shop</Link>
                     </div>
                </div>
            </div>
            : <h1>Loading ...</h1>
            }

        </div>
    );
};

export default Detail;