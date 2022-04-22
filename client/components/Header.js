import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import ethLogo from '../assets/eth.png'
import uniSwapLogo from '../assets/uniswap.png'
import {FiArrowUpRight} from "react-icons/all";

const style = {
    wrapper: '',
    headerLogo: '',
    nav: '',
    navItemContainer: '',
    navItem: '',
    activeNavItem: ''

};

const Header = () => {

    const [selectedNav, setSelectedNav] = useState('swap');

    return (
        <div className={style.wrapper}>
            <div className={style.headerLogo}>
                <Image src={uniSwapLogo} height={40} width={40} alt='uniswap'/>
            </div>
            <nav className={style.nav}>
                <div className={style.navItemContainer}>
                    <div
                        onClick={() => setSelectedNav('swap')}
                        className={`${style.navItem} ${selectedNav === 'swap' && style.activeNavItem}`}>
                        Swap
                    </div>
                    <div
                        onClick={() => setSelectedNav('pool')}
                        className={`${style.navItem} ${selectedNav === 'pool' && style.activeNavItem}`}>
                        Pool
                    </div>
                    <div
                        onClick={() => setSelectedNav('vote')}
                        className={`${style.navItem} ${selectedNav === 'vote' && style.activeNavItem}`}>
                        Vote
                    </div>
                    <a
                        href="https://info.uniswap.org/#"
                        target='_blank'
                        rel='noreferrer'>
                        <div
                            onClick={() => setSelectedNav('chart')}
                            className={style.navItem}>
                            Chart <FiArrowUpRight/>
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header;
