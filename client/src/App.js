import { useEffect, useState } from 'react';
import CompanyLogin from './components/CompanyLogin';
import CompanySignup from './components/CompanySignup';
import Home from './components/Home';
import { Route } from 'react-router-dom';
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
      r.json().then((r) => console.log(r))
    }
  })
}, [])

  return (
    <div className="App">
      {/* <UserProvider> */}
        <Route exact path='/'>
          <Home user={user}/>
        </Route>
        <Route exact path='/companysignup'>
          <CompanySignup />
        </Route>
        <Route exact path='/companylogin'>
          <CompanyLogin />
        </Route>
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
