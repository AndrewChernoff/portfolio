import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import style from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={style.nav}>
      <Link activeClass={style.active} to="main" spy={true} smooth={true} duration={500}>
        Main
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
    </div>
  );
};

export default Nav;
