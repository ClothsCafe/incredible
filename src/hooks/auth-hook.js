import { useState, useCallback, useEffect } from 'react';
import { AUTH_TYPE_GOOGLE, AUTH_TYPE_PHONE } from '../constants/AUTH_CONSTANTS';

let logoutTimer;

export const useAuth=()=>{
const [token, setToken] = useState();     //Will be changed to false
const [authType, setAuthType] = useState();
const [authModalOpen,setAuthModalOpen]=useState();
const [tokenExpire,setTokenExpire]=useState();
const [userId,setUserId]=useState(null);
const [emailId,setEmailId]=useState(null);
const [phoneNo,setPhoneNo]=useState(null);
const [imgId,setImgId]=useState(null);





const login = useCallback((authType,userName,phoneOrEmail,imgId,token,expireTime) => {
  setToken(token);
  setUserId(userName);
  switch (authType) {
    case AUTH_TYPE_PHONE:
        setPhoneNo(phoneOrEmail)
      break;
    case AUTH_TYPE_GOOGLE:
        setEmailId(phoneOrEmail)
      break;

    default:
        setPhoneNo(phoneOrEmail)
      break;
  }
  setAuthType(authType)
  setImgId(imgId);
  setAuthModalOpen(false)
  const tokenExpireTime=expireTime || new Date(new Date().getTime()+1000*60*60);
  setTokenExpire(tokenExpireTime);
  localStorage.setItem(
    'userData',
    JSON.stringify({userName,authType,phoneNo,emailId,imageUrl:imgId,token,expires:tokenExpireTime.toISOString()})
  );
}, []);

const logout = useCallback((authType) => {
  setToken(null);
  setTokenExpire(null);
  setUserId(null);
  setImgId(null);
  setAuthType(AUTH_TYPE_PHONE);
  setAuthModalOpen(true);
  if(authType===AUTH_TYPE_GOOGLE){
    //Delete GOOGLE CRED
  }

  localStorage.removeItem('userData');

}, []);
useEffect(()=>{
  if(token && tokenExpire){
    const remainingTime=tokenExpire.getTime()-new Date().getTime();
    logoutTimer=setTimeout(logout,remainingTime);

  }else{
    clearTimeout(logoutTimer);
  }
},[token,logout,tokenExpire]);


useEffect(()=>{
  const storedData=JSON.parse(localStorage.getItem('userData'));
  if(storedData && storedData.token && new Date(storedData.expires) > new Date()){
    login(storedData.authType,storedData.userId,storedData.emailId,storedData.imgId,storedData.token,new Date(storedData.expires))
  }
},[login]);
    return {token,login,logout,userId,phoneNo,emailId,imgId,setAuthModalOpen,authModalOpen,authType};
}
