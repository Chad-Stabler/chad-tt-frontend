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


  // function useForm(formData) {
  //   const { getValue } = useForm();
  //   const [data, setData] = useState(formData ?? {});
    
  //   useEffect(() => {
  //     setData(formData ?? {});
  //   }, [formData]);
  // }
    
  // const handleChange = ({ target }) => {
  //   setData((data) => ({
  //     ...data,
  //     [target.description]: getValue(target),
  //     [target.clip_link]: getValue(target),
  //     [target.title]: getValue(target),
  //     [target.option]: getValue(target)
  //   }));
  //   return [data, handleChange];
  // };

  // if (details.o_site === 'youtube') {
    //   const vidId = details.clip_link.split('v=')[1];
    //   details.clip_link = vidId;
    // } else if (details.o_site === 'twitch') {
    //   const vidId = details.clip_link.split('clip/')[1];
    //   const twitchFormat = `https://clips.twitch.tv/embed?clip=${vidId}`;
    //   details.clip_link = twitchFormat;
    // } else {
    //   setError('Something went wrong creating the clip, please try again');
    //   return;
    // }