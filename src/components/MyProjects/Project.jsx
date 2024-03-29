import style from "./Project.module.scss";
import Roll from 'react-reveal/Roll';

const Project = ({backgroundStyle, title, descr, link}) => {
    return <Roll top>
    <div style={backgroundStyle} className={style.projectItem}>
    <div className={style.imageContainer}>
        <div className={style.overlay}></div>
      <a href={link}>Look</a>
    </div>

    <div className={style.projectItem__content}>
      <div className={style.projectItem__title}>{title}</div>
      <div className={style.projectItem__descr}>
        {descr}
      </div>
    </div>
  </div>
  </Roll>
}

export default Project