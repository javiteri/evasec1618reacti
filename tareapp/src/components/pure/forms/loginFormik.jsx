import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const loginSchema= Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid email format')
                .required('email is requiered'),
        password: Yup.string()
                .required('password is requiered'),        

    }
)

const LoginFormik = () => {
    const initialCredentials={
        email:'',
        password:''
    }

    const history = useNavigate();

    return (
        <div>
            <h4>Login Form</h4>
            <Formik
                //*** Initial values that the form will take*/
                initialValues={initialCredentials}
                //*** Yup validation Schema*/
                validationSchema={loginSchema}
                //*** OnSubmit Event*/
                onSubmit={async(values)=> {
                    await new Promise((r)=> setTimeout(r,1000));
                    alert(JSON.stringify(values, null, 2));
                    //*** we save the data in the localstorage*/
                    await localStorage.setItem('credentials',values);
                    history('/profile');
                }}>

                {/* We obtain props from Formik  */}
                 {({values, touched, errors, isSubmitting, handleChange,handleBlur,})=>(
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="javiteri80@gmail.com" type="email"/>
                        {/* Email Errors  */}
                            {
                                errors.email && touched.email &&(
                                    //*<div>
                                    //*{/*<p>{errors.email} </p>*/}
                                        <ErrorMessage name="email" component='div'></ErrorMessage>
                                    //*</div>
                                    
                                )
                            }
                        
                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="password" type="password"/>
                        {/* Password Errors  */}
                            {
                                errors.password && touched.password &&(
                                        <ErrorMessage name='password' component='div'></ErrorMessage>
                                )
                            }

                        <button type='submit'>Login</button>
                            {isSubmitting ? (<p>Login your credentials...</p>):null }
                    </Form>
                 )
                 }

            </Formik>
        </div>
    );
}

export default LoginFormik;
