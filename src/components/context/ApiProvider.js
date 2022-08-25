import React, { createContext, useEffect, useState } from 'react';
import { getData } from '../../services/getData';

export let ApiData = createContext()

const ApiProvider =  ({children}) => {

    const [data , setData] = useState([])
    const [err , setErr] = useState({})

    useEffect(()=>{
        const fetchData = async () => {
           setData(await getData(''))
        }
    
        fetchData()
        .catch(err => {
            setErr(err)
           })
    } , [children.Detail])

    return (
            <ApiData.Provider value={{data , err}}>
                {children}
            </ApiData.Provider>
    );
};

export default ApiProvider;