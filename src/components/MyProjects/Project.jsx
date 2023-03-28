import style from "./Project.module.scss";

const Project = ({backgroundStyle, title, descr}) => {
    return <div style={backgroundStyle} className={style.projectItem}>
    <div className={style.imageContainer}>
        <div className={style.overlay}></div>
      <button>Look</button>
    </div>

    <div className={style.projectItem__content}>
      <div className={style.projectItem__title}>{title}</div>
      <div className={style.projectItem__descr}>
        {descr}
      </div>
    </div>
  </div>
}

export default Project