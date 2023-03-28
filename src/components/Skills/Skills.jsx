import style from './Skills.module.css';
import styleContainer from '../../common/styles/ContainerStyles.module.css';
import Skill from './Skill/Skill';
import Title from '../../common/components/Title';

const Skills = () => {
    return <div className={style.skillsBlock}>
         
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            {/* <h2 className={style.title}>Skills</h2> */}
            <Title title='Skills' titleDescr={'My tech stack'}/>
            <div className={style.skills}>
                <Skill title={'JS'} description={'facere quis minima, esse repellat nostrum enim sit hic velit?'}/>
                <Skill title={'CSS'} description={'Rerum officiis tenetur dolorum, cupiditate voluptatum laborum, veritatis distinctio placeat quasi soluta'}/>
                <Skill title={'React'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
            </div>
        </div>
    </div>
}

export default Skills