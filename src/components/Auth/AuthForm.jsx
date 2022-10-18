/* eslint-disable max-len */
import { Link, Navigate } from 'react-router-dom';
import { useAuth, useUser } from '../../state/UserContext.jsx';
import { InputController, FormButton } from '../Forms/FormController.jsx';
import { useForm } from '../Forms/useForm.js';
import styles from './AuthForm.css';

export default function AuthForm({ mode = 'signin' }) {
  const user = useUser();
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
      link: '/signup',
    },
    action: signIn,
    redirect: '/profile'
  };

  const signup = {
    prompt: 'Create an account',
    button: 'Sign Up',
    switch: {
      prompt: 'Already have an account?',
      link: '/signin',
    },
    action: signUp,
    redirect: '/profile'
  };

  const modes = { signin, signup };
  const type = modes[mode];

  if (user) return <Navigate to="/profile" />;

  return (

    <><form className={styles.AuthForm} onSubmit={handleSubmit}>
      <h2>{type.prompt}</h2>

      <InputController
        label="Email"
        name="email"
        type="email"
        required
        value={credentials.email}
        onChange={handleChange}
      />

      {mode === 'signup' ? <InputController
        label="Gamertag"
        name="GamerTag"
        required
        value={credentials.GamerTag}
        onChange={handleChange}
      /> : <></>}

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
    {/*
    <TwitchEmbed URL="https://clips.twitch.tv/embed?clip=IncredulousAbstemiousFennelImGlitch"/> */}
    </>);
}
