<!-- starter web  -->
redirect routes

 <!-- <Switch>
          <Route exact path="/">
            {
              !user ? <Auth setUser={setUser} /> : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/CreateCharacter">
            {
              user ? <CreateCharacter /> : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/Profile">
            {
              user ? <Profile /> : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/detail/:id">  
            {
              user ? <Detail/> : <Redirect to="/" />
            }
          </Route>
        </Switch> -->



         {/* <ul className={styles.Profile}>
      {gameLists.map(result => {
        return <li key={result._id} className={styles.searchResult}>
          <SearchResultCard games={result} />
        </li>;
      })}
    </ul> */}
    {/* { gameLists.length > 0
      ? <FormButton onClick={more}>moar</FormButton>
      : ''
    } */}
  </section>;

  https://myst-backend.herokuapp.com

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

// import YouTubeEmbed from '../Embeds/YouTube.jsx';
// import TwitchEmbed from '../Embeds/Twitch.jsx';

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