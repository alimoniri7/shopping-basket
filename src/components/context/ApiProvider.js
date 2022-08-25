import React, { createContext, useEffect, useState } from 'react';
import { getData } from '../../services/getData';

export let ApiData = createContext()

const ApiProvider =  ({children}) => {

    const [data , setData] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
           setData(await getData(''))
        }
    
        fetchData()
    } , [children.Detail])

    return (
            <ApiData.Provider value={data}>
                {children}
            </ApiData.Provider>
    );
};

export default ApiProvider;