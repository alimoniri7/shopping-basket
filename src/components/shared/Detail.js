import React, { useEffect, useState } from 'react';
import {useLocation, useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import CountingButtons from './CountingButtons';
import { getData } from '../../services/getData';

import queryString from 'query-string';

import styles from './detail.module.scss'

const Detail = () => {
    const [finalData , setFinalData] = useState({})

    let params = useParams()
    let queries = useLocation()


    let data = queryString.parse(queries.search)

    const dataHandler = async ()=>{
        if(Object.keys(data).length===7){
            console.log('old data');
            return data
        }else{
            let freshData = await getData(params.id)
            console.log('new data');
            return freshData
        }
        
    }

    useEffect(()=>{
        dataHandler().then(res=>{
            setFinalData({...res})
        })
    },[])
    
    console.log(finalData);
    console.log(Object.keys(finalData).length);


    return (

        <div>
            {Object.keys(finalData).length===0 ?
            <h1 style={{margin : '150px auto 0 auto' , fontSize:'5rem', fontWeight : '900'}}>Loading ...</h1>
            :<div className={styles.detailContainer}>
                <img src={finalData.image} alt="" className={styles.banner} />
                <div className={styles.infoBox}>
                    <h3>{finalData.title}</h3>
                    <p>{finalData.description}</p>
                    <div className={styles.boxes}>
                        <div className={styles.category}>
                            <span>Category : </span>
                            <span>{finalData.category}</span>
                        </div>
                        <CountingButtons data={{...finalData , id : Number(finalData.id) , count : Number(finalData.count) , price : parseFloat(finalData.price)}} />
                    </div>
                     <div className={styles.boxes}>
                        <span className={styles.price}>{finalData.price} $</span>
                        <Link to='/products'>back to shop</Link>
                     </div>
                </div>
            </div>
        }
        </div>
    )
};

export default Detail;