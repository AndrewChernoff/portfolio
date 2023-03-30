import style from './Skills.module.scss';
import styleContainer from '../../common/styles/ContainerStyles.module.css';
import Skill from './Skill/Skill';
import Title from '../../common/components/Title';
import { FaReact } from 'react-icons/fa';
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const Skills = () => {

    const ReactIcon =  <FaReact style={{color: 'rgb(0,0,128)', fontSize: '50px'}}/>
    const JSIcon = <FaJsSquare style={{color: 'yellow', fontSize: '50px'}}/>
    const CSSIcon = <FaCss3Alt style={{color: 'blue', fontSize: '50px'}}/>
    
    return <div className={style.skillsBlock}>
         
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <Title title='Skills' titleDescr={'My tech stack'}/>
            <div className={style.skills}>
                <Skill title={'JavaScript'} icon={JSIcon} description={'facere quis minima, esse repellat nostrum enim sit hic velit?'}/>
                <Skill title={'CSS'} icon={CSSIcon} description={'Rerum officiis tenetur dolorum, cupiditate voluptatum laborum, veritatis distinctio placeat quasi soluta'}/>
                <Skill title={'React'} icon={ReactIcon} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
            </div>
        </div>
    </div>
}

export default Skills