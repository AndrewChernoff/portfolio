import React, { useState } from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import style from './ContactForm.module.scss'
import Rotate from 'react-reveal/Rotate';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

 
 const SignupSchema  = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   message: Yup.string()
     .min(1, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
 });
 
const ContactFrom = ({setRequestError, setStatus, }) => {


  const form = useRef();


  const sendFormData = async (data) => {
    try {
      emailjs
        .sendForm(
          "service_v2brkss",
          "template_umalkri",
          form.current,
          "nGlXldfsUpxtuxMVb"
        )
        .then(
          () => {
            setStatus("success");
            setRequestError(true);
          },
          (error) => {
            setStatus("error");
            setRequestError(true);
          }
        );
    } catch (e) {
      setStatus("error");
      setRequestError(true);
    } finally {
      setTimeout(() => setRequestError(false), 5000);
    }
  };

  return <Rotate top right> 
  <div className={style.my__form}>
    
     <h2 className={style.header}>Estimate your Project?</h2>

     <Formik
       initialValues={{
         name: '',
         message: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={(values, { resetForm }) => {
        sendFormData(values);
        resetForm();
       }}
     >
       {({ errors, touched }) => (
         <Form ref={form}>
          <div className={style.field__wrapper}>
           <label htmlFor='name'>What is Your Name:</label>
           <Field type="text" name="name" className={style.textarea__field}/>
           {errors.name && touched.name ? <div>{errors.name}</div> : null}
          </div>

          <div className={style.field__wrapper}>
           <label htmlFor='email'>Your Email Address:</label>
           <Field type="text" name="email" className={style.textarea__field}/>
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>

          <div className={style.field__wrapper}>
           <label htmlFor='message'>How can I help you?:</label>
           <Field type="text" name="message" as='textarea' className={style.textarea__field}/>
           {errors.message && touched.message ? <div>{errors.message}</div> : null}
          </div>
           <button type="submit" className={style.btn}>Send</button>
         </Form>
       )}
     </Formik>
   </div>
   </Rotate>

};

 export default ContactFrom