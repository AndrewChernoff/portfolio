import style from "./MyProjects.module.css";
import styleContainer from "../../common/styles/ContainerStyles.module.css";

const MyProjects = () => {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${styleContainer.container}`}>
        <h2 className={style.title}>My Projects</h2>


    <div className={style.projectItems}>
        <div className={style.projectItem}>
          <div className={style.imageContainer}>
            <button>Look</button>
          </div>

          <div className={style.projectItem__content}>
            <div className={style.projectItem__title}>Network</div>
            <div className={style.projectItem__descr}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>

        <div className={style.projectItem}>
          <div className={style.imageContainer}>
            <button>Look</button>
          </div>
          
          <div className={style.projectItem__content}>
            <div className={style.projectItem__title}>Network</div>
            <div className={style.projectItem__descr}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
