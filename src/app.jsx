import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Profile from './components/Page/Profile.jsx';
import Layout from './components/Page/Layout.jsx';
import Users from './components/Users/Users.jsx';
import AuthForm from './components/Auth/AuthForm.jsx';
import UserProvider from './state/UserContext.jsx';
// import Search from './components/Search/Search.jsx';
// import GameListProvider from './state/GameContext.jsx';
  
export default function App() {
  return (
    <Router>
      <UserProvider>
        {/* <GameListProvider> */}
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<AuthForm mode="signin" />} />
            <Route path="signUp" element={<AuthForm mode="signup" />} />
            <Route path="users" element={<Users />} />
            <Route path="profile" element={<Profile />}/>
          </Route>

          {/* <Route path="auth" element={<Auth />}>
            <Route index element={<AuthForm mode="signin" />} />
            <Route path="signUp" element={<AuthForm mode="signp" />} />
          </Route> */}
  
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {/* </GameListProvider> */}
      </UserProvider>
  
    </Router>
  );
}
