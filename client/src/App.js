import CompanyLogin from './components/CompanyLogin';
import CompanySignup from './components/CompanySignup';
import Home from './components/Home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/companysignup'>
        <CompanySignup />
      </Route>
      <Route exact path='/companylogin'>
        <CompanyLogin />
      </Route>
    </div>
  );
}

export default App;
