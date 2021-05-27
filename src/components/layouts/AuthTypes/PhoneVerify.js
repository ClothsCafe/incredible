import { FormControl, FormGroup, FormHelperText, Input } from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup'
import Button from '../../common/Button/Button';
import Text from '../../common/Text';

export default function PhoneVerify({
    initialValues={},
    submitVerificationCode,
    classes,
    isLoading,
    fbError,
}) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
                vCode: Yup.number().required("Please provide a Verification Code").min(6, "Please Provide a correct Verification Code.")
            })}

            onSubmit={submitVerificationCode}
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
                        <Text className={classes.formLabel}>Verification Code</Text>
                        <FormControl className={classes.formInput}>


                            {/* <InputLabel required={true} htmlFor="password">Email address</InputLabel> */}
                            <Input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.vCode} id="vCode" aria-describedby="helper-text-vCode" />
                            {errors.vCode && <FormHelperText error={true} id="helper-text-vCode">{errors.vCode}</FormHelperText>}


                        </FormControl>

                        <Button isLoading={isLoading} id='verifyButton' type="submit" color="primary">Verify</Button>
                    </FormGroup>
                    {(fbError) && <FormHelperText error={true} id="helper-text">{fbError}</FormHelperText>}

                </form>
            }}
        </Formik>
    )
}
