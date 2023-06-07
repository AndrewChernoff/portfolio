import style from './AboutMe.module.scss';
import styleContainer from '../../common/styles/ContainerStyles.module.css';
import Title from '../../common/components/Title';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

const AboutMe = () => {
   return (
     <div className={style.aboutMe}>
       <div className={styleContainer.container}>
         <Title title="About me" titleDescr={"Know Me More"} />

         <Fade bottom cascade>

         <div className={style.aboutMe__wrapper}>
         <div className={style.aboutMe__info}>
           <h2>Hi, I'm <span>Andrew Chernov</span></h2>
           <div className={style.aboutMe__info_descr}>
             I'm a frontend developer with a passion to learn something new. I really enjoy
             developing simple, clean and slick websites that can provide real value
             to the end user. 
           </div>  
         </div>
          <div className={style.aboutMe__exp}>
              <div className={style.aboutMe__exp_circle}>1</div>
              <h2>Years of Experiance</h2>
          </div>
        </div>
        </Fade>

        <Rotate bottom right cascade>

        <div className={style.aboutMe__personal}>
            <div className={style.aboutMe__personal_item}>
              <h3>Name:</h3>
              <div>Andrew Chernov</div>
            </div>
            <div className={style.aboutMe__personal_item}>
              <h3>Email:</h3>
              <div>whitedrew538@gmail.com</div>
            </div>
            <div className={style.aboutMe__personal_item}>
              <h3>Date of birth:</h3>
              <div>14 July, 2000</div>
            </div>
            <div className={style.aboutMe__personal_item}>
              <h3>From:</h3>
              <div>Chelyabinsk, Russia</div>
            </div>
          </div>
          </Rotate>

       </div>
     </div>
   );
}

export default AboutMe