import style from "./Title.module.scss";

const Title = ({title, titleDescr}) => {
  return (
    <div className={style.title}>
      <div>{title}</div>
      <h2 className={style.titleDescr}>{titleDescr}</h2>
    </div>
  );
};

export default Title;