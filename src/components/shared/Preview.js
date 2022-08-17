import React from 'react';
import { Link } from 'react-router-dom'
import CountingButtons from './CountingButtons';

const Preview = ({data}) => {
    return (
        <div>
           <img src={data.image} alt="" /> 
           <div>
                <Link to={`/products/${data.id}`}>{data.title}</Link>
                <span>{data.price}</span>
           </div>

            <CountingButtons data={data}/>

        </div>
    );
};

export default Preview;