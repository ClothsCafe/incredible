import React from 'react'
import GoogleLogin from 'react-google-login'

export default function GoogleLoginHandler({
    clientId="",
    LoginWithGoogleHandler,
    onFailureHandler
}) {
    return (
        <GoogleLogin 
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={(resp)=>LoginWithGoogleHandler(resp)}
        onFailure={onFailureHandler}
        cookiePolicy={'single_host_origin'}
        style={{"marginLeft":"50px"}}
        isSignedIn={true}
    />
    )
}
