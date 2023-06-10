import style from "./Skill.module.scss";
import Fade from "react-reveal/Fade";

const Skill = (props) => {
  return (
    <div className={style.skill}>
      <Fade left={props.index % 2 === 0} right={props.index % 2 === 1}>
        <div className={style.skill__name}>
          <div>{props.skillName}</div>
          <div>{props.percent}%</div>
        </div>
        <div className={style.progress}>
          <div
            className={style.progress__bar}
            style={{ width: `${props.percent}%` }}
          ></div>
        </div>
      </Fade>
    </div>
  );
};

export default Skill;
