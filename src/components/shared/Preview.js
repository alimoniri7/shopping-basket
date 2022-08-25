import React from 'react';
import { Link } from 'react-router-dom'
import { shorter } from '../../helper/shorter';
import CountingButtons from './CountingButtons';
import styles from './preview.module.scss'

const Preview = ({data}) => {
    return (
        <div className={styles.container}>
            <div>
                <img src={data.image} alt="" /> 
            </div>
            <div>
                <div className={styles.info}>
                    <Link to={`/products/${data.id}`}>{shorter(data.title , 3)}</Link>
                    <span>{data.price} $</span>
                </div>

                <CountingButtons data={data}/>
            </div>

        </div>
    );
};

export default Preview;