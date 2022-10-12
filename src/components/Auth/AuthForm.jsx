/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { useAuth } from '../../state/UserContext.jsx';
import { InputController, FormButton } from '../Forms/FormController.jsx';
import { useForm } from '../Forms/useForm.js';

import styles from './AuthForm.css';


// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [loginEmail, setLoginEmail] = useState('');
// const [loginPassword, setLoginPassword] = useState('');
// const { push } = useHistory();

// async function handleSubmit(e) {
      
//   e.preventDefault();
      
//   const user = await signUp(email, password);
      
//   setUser(user);
//   push('Profile');

// }
      
      
// async function handleLoginSubmit(e) {
      
//   e.preventDefault();
      
//   const user = await signIn(loginEmail, loginPassword);
      
//   setUser(user);
//   push('Profile');
// }



export default function AuthForm({ mode = 'signin' }) {
  const { signUp, signIn, error } = useAuth();
  const [credentials, handleChange] = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await type.action(credentials);
  };



  const signin = {
    prompt: 'Sign into your account',
    button: 'Sign In',
    switch: {
      prompt: 'Need to create an account?',
      link: 'signup',
    },
    action: signIn,
    redirect: '/Profile'
  };

  const signup = {
    prompt: 'Create an account',
    button: 'Sign Up',
    switch: {
      prompt: 'Already have an account?',
      link: '../',
    },
    action: signUp,
    redirect: '/Profile'
  };

  const modes = { signin, signup };
  const type = modes[mode];


  return (


    
  //   <div className="auth">
  //     <form className="login-form" onSubmit={handleLoginSubmit}>
  //       <label>Email: <input onChange={e => setLoginEmail(e.target.value)} value={loginEmail} type="email"></input></label>
  //       <label>Password: <input onChange={e => setLoginPassword(e.target.value)} value={loginPassword} type="password"></input></label>
  //       <button>Log In</button>
  //     </form>
  //     <br></br>
  //     <hr></hr>
  //     <br></br>
  //     <label>Not a user already?
  //       <form onSubmit={handleSubmit} className="signup-form">
  //         <label>Email<input onChange={e => setEmail(e.target.value)} value={email} type="email"></input></label>
  //         <label>Password<input onChange={e => setPassword(e.target.value)} value={password} type="password"></input></label>
  //         <button>Sign Up</button>
  //       </form>
  //     </label>
  //   </div>
  // );



    <form className={styles.AuthForm} onSubmit={handleSubmit}>
      <h2>{type.prompt}</h2>

      <InputController
        label="Email"
        name="email"
        type="email"
        required
        value={credentials.email}
        onChange={handleChange}
      />

      <InputController
        label="Password"
        name="password"
        type="password"
        required
        value={credentials.password}
        onChange={handleChange}
      />

      <FormButton>{type.button}</FormButton>

      <p className="error">{error}</p>

      <nav>
        <Link to={type.switch.link}>{type.switch.prompt}</Link>
      </nav>
    </form>
  );
}
