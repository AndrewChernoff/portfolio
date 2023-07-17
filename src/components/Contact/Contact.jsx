import React from "react";
import styleContainer from "../../common/styles/ContainerStyles.module.css";
import style from "./Contact.module.scss";
import ContactFrom from "./ContactForm/ContactForm";
import Rotate from 'react-reveal/Rotate';


const Contact = ({setRequestError, requestError, setStatus, status}) => {
  return (
    <div className={style.contacts} id='contacts'>
          <Rotate top left>
      <div className={`${styleContainer.container}`}>
        <div className={style.contacts__blocks}>
          <div className={style.contacts__descr}>
            <h2>Let's get in touch</h2>
            <p>
              I enjoy discussing new projects and design challenges. Please
              share as much info, as possible so we can get the most out of our
              first catch-up.
            </p>

            <div className={style.contacts__descr_item}>
              <h3>Living in:</h3>
              <address>Chicherin street, Chelyabinsk, Russia</address>
            </div>

            <div className={style.contacts__descr_item}>
              <h3>Call:</h3>
              <a className={style.phone} href="tel:+79995849856">+7(999) 584-98-56</a>
            </div>
          </div>

          <div className={style.contacts__form}>
                <ContactFrom setRequestError={setRequestError} requestError={requestError} setStatus={setStatus} status={status} />
        </div>  
        </div>
      </div>
      </Rotate>
    </div>
  );
};

export default Contact;
