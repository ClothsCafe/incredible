import React, { useContext, useEffect, useState } from 'react'
import {  Card, makeStyles} from '@material-ui/core'
import clsx from 'clsx'
import { AuthContext } from '../../context/auth-context'
import { useHistory } from 'react-router'
import firebase from "firebase/app";
import { AUTH_TYPE_GOOGLE, AUTH_TYPE_PHONE } from '../../constants/AUTH_CONSTANTS'
import PhoneLogin from './AuthTypes/PhoneLogin'
import GoogleLoginHandler from './AuthTypes/GoogleLogin'
import PhoneVerify from './AuthTypes/PhoneVerify'
import { auth } from '../../config/firebaseconfig'

const useStyle = makeStyles((theme) => ({

    signUp: {
        ...theme.typography.body2,
        margin: theme.spacing(2)

    },
    form: {
        marginTop: theme.spacing(2),
        width: "100%",

    },
    formOuter: {

    },
    formLabel: {
        marginBottom: theme.spacing(-2)
    },
    formInput: {
        // marginLeft:none,
        // border:"1px solid red",
        marginBottom: theme.spacing(2)
    }
}))
function AuthLayout({
    setSignUp = () => { },
    setLoginModal,
    ...props
}) {

    const classes = useStyle()
    const [verificationCode, setVerificationCode] = useState(false)


    const clientId = process.env.REACT_APP_CLIENT_ID
    

    const [isLoading, setIsLoading] = useState(false)
    const [fbError, setfbError] = useState(false);


    const userAuth = useContext(AuthContext)


    const initialValues = {
        name: "",
        phoneNo: "",
        vCode: ""
    }

    const history = useHistory()

    useEffect(() => {
        window.appVerifier = new firebase.auth.RecaptchaVerifier(
            "signUpButton",
            {
                'size': 'invisible',

            }
        )

    }, [])
    const submitVerificationCode = async (event) => {
        console.log(event.vCode)
        setIsLoading(true)
        window.confirmationResult
            .confirm(event.vCode)
            .then(function (result) {
                // User signed in successfully.
                var user = result.user;
                setIsLoading(false)
                user.getIdToken().then(idToken => {
                    console.log(user);
                    userAuth.login(AUTH_TYPE_PHONE, user.name, user.phoneNo, "", idToken, null)
                    history.push('/')
                });
            })
            .catch(function (error) {
                // User couldn't sign in (bad verification code?)
                console.error("Error while checking the verification code", error);
                window.alert(
                    "Error while checking the verification code:\n\n" +
                    error.code +
                    "\n\n" +
                    error.message
                );
            });
    }
    const submitForm = async (event) => {


        const appVerifier = window.appVerifier;
        setIsLoading(true)

        try {
            await auth
                .signInWithPhoneNumber(event.phoneNo, appVerifier)
                .then(function (confirmationResult) {
                    console.log("Success");
                    setIsLoading(false)
                    setVerificationCode(true)
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                })
                .catch(function (error) {
                    console.log(error)
                    console.log("Error:" + error.code);
                });

            // setIsLoading(true)
            // response=await auth.signInWithEmailAndPassword(e.email,e.password)
            // history.push('/')
            // token=await response.user.getIdToken()


            // userAuth.login(e.name,e.phoneNo,"","token",null)
            // history.push('/')



        }
        catch (err) {
            console.log(err)
            setIsLoading(false)
            setfbError(err.message)
        }
    }
    const LoginWithGoogleHandler =
        (resp) => {
            console.log(resp)
            const userData = resp.profileObj
            userAuth.login(AUTH_TYPE_GOOGLE, userData.givenName, userData.email, "", resp.tokenId, null)
            history.push('/')
        }
    const onFailureHandler = (res) => {
        console.log(res)

    }


    return (
        <Card
            title="Login"

        >
            {!verificationCode ?
                <>
                <PhoneLogin 
                    classes={classes} 
                    fbError={fbError} 
                    isLoading={isLoading} 
                    submitForm={submitForm} 
                    initialValues={initialValues} 
                />
                <GoogleLoginHandler 
                    LoginWithGoogleHandler={LoginWithGoogleHandler}
                    onFailureHandler={onFailureHandler}
                    clientId={clientId}

                />
                </>
                :
                <PhoneVerify
                    classes={classes} 
                    fbError={fbError} 
                    isLoading={isLoading} 
                    submitVerificationCode={submitVerificationCode} 
                    initialValues={initialValues} 
                />
            }
        </Card>


    )
}



export default AuthLayout

