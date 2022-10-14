import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Profile from './components/Page/Profile.jsx';
import Layout from './components/Page/Layout.jsx';
// import Users from './components/Users/Users.jsx';
import AuthForm from './components/Auth/AuthForm.jsx';
import UserProvider from './state/UserContext.jsx';
import ProtectedRoute from './components/Auth/protectedRoutes.jsx';



// import Search from './components/Search/Search.jsx';
// import GameListProvider from './state/GameContext.jsx';
  
export default function App() {
  return (
    <Router>
      <UserProvider>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="signin" element={<AuthForm mode="signin" />} />
            <Route path="signup" element={<AuthForm mode="signup" />} />
            <Route element={<ProtectedRoute/>}>
              <Route path="profile" element={<Profile />}/>
              <Route path="/" element={<Profile />}/>
            </Route> 
    
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      
        
      </UserProvider>
  
    </Router>
  );
}
