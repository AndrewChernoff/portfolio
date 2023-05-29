import style from './Skill.module.scss';

const Skill = (props) => {
    return <div className={style.skill}>
    <div className={style.skill__name}>
        <div>{props.skillName}</div>
        <div>{props.percent}%</div>
    </div>
    <div className={style.progress}>
        <div className={style.progress__bar} style={{width: `${props.percent}%`}}></div>
    </div>
</div>
}

export default Skill