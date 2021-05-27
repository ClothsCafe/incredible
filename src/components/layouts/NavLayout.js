import React, { useContext, useState } from 'react'
import { GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom'
import { AUTH_TYPE_GOOGLE } from '../../constants/AUTH_CONSTANTS';
import { AuthContext } from '../../context/auth-context';
import Button from '../common/Button/Button';


const clientId='669911320422-9oh2ug8vs3vf92mli36mg1rn6jptrp0m.apps.googleusercontent.com'

export default function NavLayout() {
  const userAuth=useContext(AuthContext);
  const logoutHandler=()=>{
    userAuth.logout()
  }
    return (
        <nav>
          {userAuth.isLoggedIn?(
            
            <ul>
                { 
                  userAuth.authType===AUTH_TYPE_GOOGLE?
                  (<GoogleLogout
                    clientId={clientId}
                    buttonText={"Logout"}
                    onLogoutSuccess={logoutHandler}
                  />)
                  :
                  (<Button onClick={logoutHandler} variant="outlined">LogOut</Button>)
                }

              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>

            </ul>
          ):(
            <h1>Please Login to Continue</h1>
          )}

      </nav>
    )
}
