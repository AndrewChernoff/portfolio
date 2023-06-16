import { Link } from 'react-scroll'
import style from "./Nav.module.scss";
import { FaPhone } from "react-icons/fa";
import { useState } from 'react';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.nav}>
      <FaPhone style={{color: '#fff'}} />

      <a href="tel:+79995849856">+7(999) 584-98-56</a>

      <div className={style.burger} onClick={() => setIsOpen(!isOpen)}>
        <div className={!isOpen ? style.bar1 : style.changeBar1}></div>
        <div className={!isOpen ? style.bar1 : style.changeBar2}></div>
        <div className={!isOpen ? style.bar1 : style.changeBar3}></div>
      </div>

      {
        isOpen && <div className={style.overlay}>
          <nav>
      <Link activeClass={style.active} to="main" spy={true} smooth={true} duration={500}>
        Main
      </Link>
      <Link activeClass={style.active} to="aboutMe" spy={true} smooth={true} duration={500}>
        About me
      </Link>
      <Link activeClass={style.active} to="skills" spy={true} smooth={true} duration={500}>
        Skills
      </Link>
      <Link activeClass={style.active} to="myWorks" spy={true} smooth={true} duration={500}>
        Projects
      </Link>
      <Link activeClass={style.active} to="contacts" spy={true} smooth={true} duration={500}>
        Contacts
      </Link>
      </nav>
        </div>
      }
    </div>
  );
};

export default Nav;
