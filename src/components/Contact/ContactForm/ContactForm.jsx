import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import TextField from '@mui/material/TextField';
 import { makeStyles } from '@mui/styles';
import EmptyTextarea from '../../../common/components/EmptyTextarea';

 
 const SignupSchema  = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });
 
const ContactFrom = () => {

  return  <div>
     <h2>Estimate your Project?</h2>

     <Formik
       initialValues={{
         name: '',
         lastName: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
          <div>
            <label for='name'>What is Your Name:</label>
            <TextField id="standard-basic" 
            InputProps={{
              sx: {
                '&::after': {
                  border: '1px solid black!important',
                }
              },
            }}
            sx={{
              width: '80%',
            }}
            variant="standard" />
            </div>
           
           <div>
           <label for='email'>Your Email Address:</label>
           <TextField id="email" 
            InputProps={{
              sx: {
                '&::after': {
                  border: '1px solid black!important',
                }
              },
            }}
            sx={{
              width: '80%',
            }}
            variant="standard" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           </div>
           
           <div>
           <label for='email'>How can I Help you?:</label>
           <EmptyTextarea />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           </div>
           <button type="submit">Send</button>
         </Form>
       )}
     </Formik>
   </div>
};

 export default ContactFrom