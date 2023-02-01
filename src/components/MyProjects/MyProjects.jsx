import style from "./MyProjects.module.css";
import styleContainer from "../../common/styles/ContainerStyles.module.css";

const MyProjects = () => {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${styleContainer.container}`}>
        <h2 className={style.title}>My Projects</h2>


    <div className={style.projectItems}>
        <div className={style.projectItem}>
          <div>
            <img className={style.img} src="https://www.lenovo.com/medias/lenovo-laptops-thinkbook-16-gen-4-intel-hero.png?context=bWFzdGVyfHJvb3R8MzQ1OTM2fGltYWdlL3BuZ3xoMjEvaGZkLzEzMjU1MTI1OTkxNDU0LnBuZ3xlMGJjMDAyZjIzYzczYmY0YTY3NTlmODcwMDJjZTBhMzg5M2VlMjFlNTNlZWJkZDMyNDA3MTdlNjc3NjhhZWY5" alt="" />

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
          <div>
            <img className={style.img} src="https://www.lenovo.com/medias/lenovo-laptops-thinkbook-16-gen-4-intel-hero.png?context=bWFzdGVyfHJvb3R8MzQ1OTM2fGltYWdlL3BuZ3xoMjEvaGZkLzEzMjU1MTI1OTkxNDU0LnBuZ3xlMGJjMDAyZjIzYzczYmY0YTY3NTlmODcwMDJjZTBhMzg5M2VlMjFlNTNlZWJkZDMyNDA3MTdlNjc3NjhhZWY5" alt="" />

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
