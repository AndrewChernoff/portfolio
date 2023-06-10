import style from './Skills.module.scss';
import styleContainer from '../../common/styles/ContainerStyles.module.css';
import Skill from './Skill/Skill';
import { FaReact } from 'react-icons/fa';
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import Title from '../../common/components/Title';

const Skills = () => {
/////////////delete
    const ReactIcon =  <FaReact style={{color: 'rgb(0,0,128)', fontSize: '50px'}}/>
    const JSIcon = <FaJsSquare style={{color: 'yellow', fontSize: '50px'}}/>
    const CSSIcon = <FaCss3Alt style={{color: 'blue', fontSize: '50px'}}/>

    
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
    
    return <div className={style.skillsBlock}>
         
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title title="Skills" titleDescr={"Technologies I know"} />
        {skills.map((el, i) => {
            return <Skill key={i} skillName={el.skillName} percent={el.percent} index={i}/>
        })}
        </div>
    </div>
}

export default Skills