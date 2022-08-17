import React, { useContext } from 'react';
import {ApiData} from './context/ApiProvider'
import Product from './shared/prodact';


const Products = () => {

    const data = useContext(ApiData)
    console.log(data);

    return (
        <div>
            {data.map(item => <Product key={item.id} data={item}/>)}
        </div>
    );
};

export default Products;