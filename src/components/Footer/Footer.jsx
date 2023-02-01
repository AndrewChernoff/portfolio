import style from './Footer.module.css';
import styleContainer from "../../common/styles/ContainerStyles.module.css";

const Footer = () => {
    return <div className={style.footer}>
        <div className={`${styleContainer.container}`}>
            <h2>Andrew Chernov</h2>

            <div className={style.footerContent}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <h3>Все права защищены</h3>
        </div>
    </div>
}

export default Footer