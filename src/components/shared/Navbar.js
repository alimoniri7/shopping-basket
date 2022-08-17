import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import basketIcon from '../../assets/svg/shopping-cart-empty-side-view-svgrepo-com.svg'
import { Basket } from '../context/basketProvider';
 
const Navbar = () => {

    let {basket} = useContext(Basket)

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
            </ul>
            <div>
                <Link to='/card'><img src={basketIcon} alt="card" /></Link>
                <span>{basket.totalSelected}</span>
            </div>
        </nav>
    );
};

export default Navbar;