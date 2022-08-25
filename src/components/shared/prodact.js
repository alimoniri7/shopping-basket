import React from 'react';
import { Link } from 'react-router-dom';
import CountingButtons from './CountingButtons';
import styles from './product.module.scss'
import { shorter } from '../../helper/shorter';

const Product = ({data}) => {

    const queryStrings = '?' + new URLSearchParams(data).toString();

    return (
        <div className={styles.cardContainer}>
            <img src={data.image} alt="product" />
            <div>
                <h3>{shorter(data.title)}</h3>
                <p>{data.price} $</p>
                <div>
                    <Link to={`/products/${data.id}/${queryStrings}`}>Details</Link>
                    <CountingButtons data={data}/>
                </div>
            </div>
        </div>
    );
};

export default Product;