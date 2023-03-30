import style from './Main.module.scss';
import styleContainer from '../../common/styles/ContainerStyles.module.css';

const Main = () => {
    return <div className={style.main}>
        <div className={styleContainer.container}>
            <div className={style.text}>
                <span>Hi there</span>
                <h1>I am Andrew Chernov</h1>
                <p>Frontend developer</p>
                
                <a href='#myWorks'>View my works</a>
            </div>

            <div className={style.photo}>

            </div>
        </div>
        </div>
}

export default Main