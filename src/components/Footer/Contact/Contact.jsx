import React from 'react'
import { Formik } from 'formik';
import "./Contact.scss"

const Contact = () => {
  return (
    <section className='contact-section'> 
        <h3>Contact Form</h3>
            <Formik
              initialValues={{name:'', email: '', message: '' }}
              validate={values => {
                const errors = {};

                if(!values.name) {
                  errors.name = "Name is required"
                } 
                

                if (!values.email) {
                  errors.email = 'Email is required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }

                if(!values.message) {
                  errors.message = "message is required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className='form-container'>
                  <div className='form-elem'>
                    <input type='text' name='email' placeholder='Email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className='form-control'/>
                      <span className='form-control-text'>{errors.email && touched.email && errors.email}</span>
                  </div>

                  <div className='form-elem'>
                    <input type='text' name='name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className='form-control'/>
                      <span className='form-control-text'>{errors.name && touched.name && errors.name}</span>
                  </div>

                  <div className='form-elem'>
                    <input type='text' name='message'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      className='form-control'/>
                      <span className='form-control-text'>{errors.message && touched.message && errors.message}</span>
                  </div>

                  <div>
                    <button type='submit' className='submit-btn' disabled={isSubmitting}>Submit Message</button>
                  </div>
                </form>
              )}
            </Formik>
    </section>
  )
}

export default Contact