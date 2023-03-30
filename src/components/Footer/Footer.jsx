import style from './Footer.module.scss';
import styleContainer from "../../common/styles/ContainerStyles.module.css";

const Footer = () => {
    return <div className={style.footer}>
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <h2 className={style.title}>Andrew Chernov</h2>

            <div className={style.footerContent}>
                <a>Instagram</a>
                <a>Telegram</a>
                <a>Facebook</a>
                <a>Github</a>
            </div>

            <h3>All Rights Reserved.</h3>
        </div>
    </div>
}

export default Footer