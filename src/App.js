import './App.css';
import { Provider } from 'react-redux';
import Routes from './routes/Routes';
import configureStore from './store/store';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './styles/theme';
import { useAuth } from './hooks/auth-hook';
import { AuthContext } from './context/auth-context';

const store = configureStore({})
function App() {
  const {token,login,logout,userId,imgId,authModalOpen,setAuthModalOpen,authType}= useAuth();

  return (
    <AuthContext.Provider
    value={{ 
      isLoggedIn: !!token,
      authModalOpen:authModalOpen,
      authType:authType,
      token:token,
      userId:userId,
      imgId:imgId,
      setAuthModal: setAuthModalOpen,
      login: login, 
      logout: logout }}
    >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Routes />
      </Provider>    
    </ThemeProvider>
    </AuthContext.Provider>

  );
}

export default App;
