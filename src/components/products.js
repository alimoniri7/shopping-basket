import React, { useContext } from 'react';
import {ApiData} from './context/ApiProvider'
import Product from './shared/prodact';
import styles from './products.module.scss'


const Products = () => {

    const data = useContext(ApiData)
    console.log(data);

    return (
        <>
        {data.length===0 ? <h1 className={styles.loading}>Loading ...</h1>
        :<div className={styles.listContainer} >
            {data.map(item => <Product key={item.id} data={item}/>)}
        </div>
        
    }
    </>
    );
};

export default Products;