import { useEffect, useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import UserHomePage from './components/UserHomePage';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
//import { UserProvider } from './components/UserContext';
//import { UserContext } from './components/UserContext';
//import { useContext, useEffect } from 'react';

function App() {
//const [user, setUser] = useContext(UserContext)
const [user, setUser] = useState(null)
useEffect(() => {
  fetch('/me')
  .then((r) => {
    if (r.ok){
      r.json().then((user) => setUser(user))
    }
    else{
      r.json().then((r) => {
        console.log(r)
      })
    }
  })
}, [])

  return (
    <div className="App">
      {/* <UserProvider> */}
      <NavBar user={user} />
        <Route exact path='/'>
          {user ? <UserHomePage user={user} setUser={setUser}/> : <Home />}
      
        </Route>
        <Route exact path='/signup'>
          <SignUp setUser={setUser} />
        </Route>
        <Route exact path='/companylogin'>
          <Login setUser={setUser} />
        </Route>
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
