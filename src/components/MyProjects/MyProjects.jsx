import style from "./MyProjects.module.scss";
import styleContainer from "../../common/styles/ContainerStyles.module.css";
import Title from "../../common/components/Title";
import Project from "./Project";
import socialNetwork from "../../assets/images/social_network.jpg"
import todolist from "../../assets/images/todolist.png"
import carLeasing from "../../assets/images/carCalc.jpg"
import quiz from "../../assets/images/quiz.jpg"
import counter from "../../assets/images/counter.png"
import lebron from "../../assets/images/lebron.jpg"

const MyProjects = () => {

  const socialNetworkImg = {
    background: `url(${socialNetwork}) center center/cover no-repeat`
  }

  const todolistImg = {
    background: `url(${todolist}) center center/cover no-repeat`
  }

  const carLeasingImg = {
    background: `url(${carLeasing}) center center/cover no-repeat`
  }

  const quizImg = {
    background: `url(${quiz}) center center/cover no-repeat`
  }

  const counterImg = {
    background: `url(${counter}) center center/cover no-repeat`
  }

  const lebronImg = {
    background: `url(${lebron}) center center/cover no-repeat`
  }
  

  const projects = [
    {title: 'Social Network', backgroundStyle: socialNetworkImg, link: 'https://react-network.vercel.app/#/login'},
    {title: 'Todolist', backgroundStyle: todolistImg, link: 'https://todolist-redux-toolkit-pi.vercel.app/login'},
    {title: 'Car leasing calculator', backgroundStyle: carLeasingImg, link: 'https://andrewchernoff.github.io/carleasing'},
    {title: 'Quiz', backgroundStyle: quizImg, link: 'https://andrewchernoff.github.io/quiz'},
    {title: 'Counter', backgroundStyle: counterImg, link: 'https://counter-gbz8.vercel.app/'},
    {title: 'NBA players', backgroundStyle: lebronImg, link: 'https://players-trading.vercel.app/'},
  ]

  return (
    <div className={style.projectsBlock} id='myWorks'>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>

    <Title title={'My Projects'} titleDescr={'Some of my recent projects'}/>

    <div className={style.projectItems}>
{/*         <Project backgroundStyle={socialNetworkImg} title={'Social Network'} link={'https://react-network.vercel.app/#/login'} />
        <Project backgroundStyle={todolistImg} title={'Todolist'} link={'https://todolist-redux-toolkit-pi.vercel.app/login'} /> */}
        {projects.map((p, i) => {
          return <Project key={i} backgroundStyle={p.backgroundStyle} title={p.title} link={p.link}/>
        })}
    </div>
      </div>
    </div>
  );
};

export default MyProjects;
