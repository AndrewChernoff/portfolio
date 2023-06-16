import style from "./Footer.module.scss";
import styleContainer from "../../common/styles/ContainerStyles.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <h2 className={style.title}>Andrew Chernov</h2>

        <div className={style.footerContent}>
          <a href="https://instagram.com/chernoff489?igshid=NGExMmI2YTkyZg==">
            Instagram
          </a>
          <a href="https://t.me/And_Rew00">Telegram</a>
          <a href="https://www.facebook.com/profile.php?id=100011260093980&mibextid=ZbWKwL">
            Facebook
          </a>
          <a href="https://github.com/AndrewChernoff">Github</a>
        </div>

        <h3>All Rights Reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
