import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import EmptyTextarea from '../../../common/components/EmptyTextarea';
import style from './ContactForm.module.scss'
import Rotate from 'react-reveal/Rotate';
 
 const SignupSchema  = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   help: Yup.string()
     .min(1, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
 });
 
const ContactFrom = () => {

  return <Rotate top right> 
  <div className={style.my__form}>
    
     <h2 className={style.header}>Estimate your Project?</h2>

     <Formik
       initialValues={{
         name: '',
         help: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form >

          <div className={style.field__wrapper}>
           <label htmlFor='name'>What is Your Name:</label>
           <Field type="text" name="name" autocomplete="off" className={style.textarea__field}/>
           {errors.name && touched.name ? <div>{errors.name}</div> : null}
          </div>

          <div className={style.field__wrapper}>
           <label htmlFor='email'>Your Email Address:</label>
           <Field type="text" name="email" autocomplete="off" className={style.textarea__field}/>
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>

          <div className={style.field__wrapper}>
           <label htmlFor='help'>How can I Help you?:</label>
           <Field type="text" name="help" as='textarea' autocomplete="off" className={style.textarea__field}/>
           {errors.help && touched.help ? <div>{errors.help}</div> : null}
          </div>
           <button type="submit" className={style.btn}>Send</button>
         </Form>
       )}
     </Formik>
   </div>
   </Rotate>

};

 export default ContactFrom