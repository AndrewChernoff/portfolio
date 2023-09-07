import style from './Skills.module.scss';
import styleContainer from '../../common/styles/ContainerStyles.module.css';
import Skill from './Skill/Skill';
import Title from '../../common/components/Title';

const Skills = () => {
    
    const skills = [
        {skillName: 'HTML & CSS', percent: 85},
        {skillName: 'JavaScript', percent: 74},
        {skillName: 'Typescript', percent: 72},
        {skillName: 'Express', percent: 70},
        {skillName: 'React', percent: 85},
        {skillName: 'Redux', percent: 83},
        {skillName: 'Redux-toolkit', percent: 76},
        {skillName: 'MobX', percent: 72},
        {skillName: 'Material UI', percent: 80},
        {skillName: 'Unit tests', percent: 70},
    ];
    
    return <div className={style.skillsBlock} id='skills'>    
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title title="Skills" titleDescr={"Technologies I know"} />
        {skills.map((el, i) => {
            return <Skill key={i} skillName={el.skillName} percent={el.percent} index={i}/>
        })}
        </div>
    </div>
}

export default Skills