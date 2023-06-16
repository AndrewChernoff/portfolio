import { useState } from 'react'
import Nav from '../Nav/Nav';
import style from './Header.module.scss';

const Header = () => {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);


    return <div className={`${style.header} ${colorChange && style.color}`}>
        {/* <div className={style.nav}> */}
        <Nav/>
        {/* </div> */}
    </div>
}

export default Header