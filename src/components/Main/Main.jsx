import { Link } from "react-scroll";
import ReactTypingEffect from "react-typing-effect";
import style from "./Main.module.scss";
import styleContainer from "../../common/styles/ContainerStyles.module.css";

const Main = () => {
  return (
    <div className={style.main} id="main">
      <div className={styleContainer.container}>
        <div className={style.text}>
          <span>HI, I'M FRONTEND DEVELOPER</span>
          <ReactTypingEffect
            text={["Andrew"]}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            displayTextRenderer={(text, i) => {
              return (
                <h1 className={style.smt}>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return <span key={key}>{char}</span>;
                  })}
                </h1>
              );
            }}
          />

          <p>based in Chelyabinsk, Russia</p>

          <Link
            activeClass={style.active}
            to="myWorks"
            className={style.worksLink}
            spy={true}
            smooth={true}
            duration={500}
          >
            View my works
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
