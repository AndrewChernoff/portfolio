import style from './Main.module.scss';
import styleContainer from '../../common/styles/ContainerStyles.module.css';

const Main = () => {
    return <div className={style.main}>
        <div className={styleContainer.container}>
            <div className={style.text}>
                <span>HI, I'M FRONTEND DEVELOPER</span>
                <h1>Andrew</h1>
                <p>based in Chelyabinsk, Russia</p>
                
                <a href='#myWorks'>View my works</a>
            </div>

       {/*      <div className={style.photo}>

            </div> */}
        </div>
        </div>
}

export default Main