import React from 'react';
import {Routes , Route , Navigate} from 'react-router-dom'
import Card from './components/Card';
import ApiProvider from './components/context/ApiProvider';
import BasketProvider from './components/context/basketProvider';
import Products from './components/products';
import Detail from './components/shared/Detail';
import Navbar from './components/shared/Navbar'

const app = () => {
    return (
        <ApiProvider>
            <BasketProvider>
                <Navbar/>
                <Routes>
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/products/:id' element={<Detail/>}/>
                    <Route path='/card' element={<Card/>}/>
                    <Route path='/*' element={<Navigate to='/products' />}/>
                </Routes>
            </BasketProvider>
        </ApiProvider>
    );
};

export default app;
