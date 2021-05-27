import { FormControl, FormGroup, FormHelperText, Input } from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup'
import Button from '../../common/Button/Button';
import Text from '../../common/Text';

export default function PhoneLogin({
    initialValues={},
    submitForm=()=>{},
    classes,
    isLoading,
    fbError,


}) {
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
            name:Yup.string().required("Required"),
            phoneNo:Yup.string().required("Please provide a Phone Number").min(10,"Please Provide a correct Phone No.")
        })}
        
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            handleBlur,
          } = formik;
          return <form className={classes.formOuter} onSubmit={handleSubmit}>
              <FormGroup className={classes.form} onSubmit={handleSubmit}>
                  <Text className={classes.formLabel}>Name</Text>
                  <FormControl className={classes.formInput}>
  
  
                      {/* <InputLabel required={true} htmlFor="password">Email address</InputLabel> */}
                      <Input 
                      onChange={handleChange}
                      onBlur={handleBlur} 
                      value={values.name} id="name" aria-describedby="helper-text-name" />
                      {errors.name &&<FormHelperText error={true} id="helper-text-name">{errors.name}</FormHelperText>}
  
  
                  </FormControl>
                  
                  <Text className={classes.formLabel}>Phone No.</Text>
                  <FormControl className={classes.formInput}>
  
                      {/* <InputLabel required={true} htmlFor="password">Password</InputLabel> */}
                      <Input 
                      onChange={handleChange}
                      onBlur={handleBlur} 
                      value={values.phoneNo} 
                      type="phoneNo" 
                      id="phoneNo" 
                      aria-describedby="helper-text-phoneNo" />
                      {errors.phoneNo &&<FormHelperText error={errors.phoneNo}
                          id="helper-text-phoneNo">{errors.phoneNo}</FormHelperText>}
  
                  </FormControl>
                  <Button isLoading={isLoading} id='signUpButton' type="submit" color="primary">Login</Button>
              </FormGroup>
              {(fbError) &&<FormHelperText error={true} id="helper-text">{fbError  }</FormHelperText>}
  
          </form>
        }}
        </Formik>

    )
}
