import style from './Skills.module.scss';
import styleContainer from '../../common/styles/ContainerStyles.module.css';
import Skill from './Skill/Skill';
import Title from '../../common/components/Title';

const Skills = () => {
    
    const skills = [
        {skillName: 'HTML & CSS', percent: 85},
        {skillName: 'JavaScript', percent: 70},
        {skillName: 'Typescript', percent: 65},
        {skillName: 'React', percent: 80},
        {skillName: 'Redux', percent: 75},
        {skillName: 'Redux-toolkit', percent: 70},
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