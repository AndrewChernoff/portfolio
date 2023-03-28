import style from "./MyProjects.module.scss";
import styleContainer from "../../common/styles/ContainerStyles.module.css";
import Title from "../../common/components/Title";
import socialNetwork from "../../assets/images/social_network.jpg"
import todolist from "../../assets/images/todolist.png"
import Project from "./Project";

const MyProjects = () => {

  const socialNetworkImg = {
    background: `url(${socialNetwork})`
  }

  const todolistImg = {
    background: `url(${todolist})`
  }

  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>

    <Title title={'My Projects'} titleDescr={'Some of my recent projects'}/>

    <div className={style.projectItems}>
        <Project backgroundStyle={socialNetworkImg} title={'Social Network'} descr={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
        <Project backgroundStyle={todolistImg} title={'Todolist'} descr={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
    </div>
      </div>
    </div>
  );
};

export default MyProjects;
