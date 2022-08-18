import React from 'react';
import { Link } from 'react-router-dom';
import CountingButtons from './CountingButtons';
import styles from './product.module.scss'

const Product = ({data}) => {

    return (
        <div className={styles.cardContainer}>
            <img src={data.image} alt="product" />
            <div>
                <h3>{data.title}</h3>
                <p>{data.price} $</p>
                <div>
                    <Link to={`/products/${data.id}`}>Details</Link>
                    <CountingButtons data={data}/>
                </div>
            </div>
        </div>
    );
};

export default Product;