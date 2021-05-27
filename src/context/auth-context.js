import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  authType:"phone",
  authModalOpen:false,
  token:null,
  userId:null,
  imgId:null,
  setAuthModal:()=>{},
  login: () => {},
  logout: () => {}
});
