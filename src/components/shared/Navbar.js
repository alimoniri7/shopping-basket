import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import basketIcon from '../../assets/svg/shopping-cart-empty-side-view-svgrepo-com.svg'
import { Basket } from '../context/basketProvider';
import styles from './navbar.module.scss'
 
const Navbar = () => {

    let {basket} = useContext(Basket)

    return (
        <nav className={styles.navbar} >
            <ul className={styles.menu}>
                <li>
                    <Link to='/products'>Products</Link>
                    <span></span>
                </li>
            </ul>
            <div className={styles.card}>
                <Link to='/card'><img src={basketIcon} alt="card" /></Link>
                <span>{basket.totalSelected}</span>
            </div>
        </nav>
    );
};

export default Navbar;