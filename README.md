starter web 
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