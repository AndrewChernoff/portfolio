import ReactTypingEffect from 'react-typing-effect';
import style from './Main.module.scss';
import styleContainer from '../../common/styles/ContainerStyles.module.css';

const Main = () => {
    return <div className={style.main} id='main'>
        <div className={styleContainer.container}>
            <div className={style.text}>
                <span>HI, I'M FRONTEND DEVELOPER</span>
                {/* <h1>Andrew</h1> */}
                <ReactTypingEffect
                style={{maxHeight: '233px'}}
        text={["Andrew"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1 className={style.name}>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <h1
                    key={key}
                    style={i%2 === 0 ? { color: 'white'} : {}}
                  >{char}</h1>
                );
              })}
            </h1>
          );
        }}        
      />

                <p>based in Chelyabinsk, Russia</p>
                
                <a href='#myWorks'>View my works</a>
            </div>
            </div>
        </div>
}

export default Main