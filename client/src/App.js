import { useContext, useEffect, useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import UserHomePage from './components/UserHomePage';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import AddProject from './components/AddProject';
import AvailableProjects from './components/AvailableProjects';
import { UserContext } from './components/Context';

function App() {
const { user, setUser} = useContext(UserContext)
const [projects, setProjects] = useState(null)

useEffect(() => {
  fetch('/me')
  .then((r) => {
    if (r.ok){
      r.json().then((user) => {
        //console.log(user)
        setUser(user)})
    }
    else{
      r.json().then((r) => {
        console.log(r)
      })
    }
  })
}, [setUser])

useEffect(() => {
  fetch('/projects')
  .then((r) => {
    if(r.ok){
      r.json().then((projects) =>{
        console.log(projects)
        setProjects(projects)})
    }
    else{
      r.json().then((resp) => console.log(resp))
    }
  })
}, [])

function handleNewProject(newProject){
  setProjects([...projects, newProject])
}

function handleDeleteProject(id){
  const updatedProjects = projects.filter((project) => project.id !== id)
  setProjects(updatedProjects)
}

function handleUpdatedProject(upProject){
  const updatedProjects = projects.map((project) => project.id === upProject.id ? upProject : project)
  setProjects(updatedProjects)
}

function handleAcceptedProject(acceptedProject){
  const updatedProjects = projects.map((project) => project.id === acceptedProject.id ? acceptedProject : project)
  setProjects(updatedProjects)
  user.companies.push(acceptedProject.company)
  user.projects.push(acceptedProject)
  setUser(user)
  }


  //need to add company_name to the user.contractors array if the user has NOT had a project with them

  return (
    <div className="App">
      <NavBar  />
        <Route exact path='/'>
          {user ? <UserHomePage /> : <Home />}
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/companylogin'>
          <Login />
        </Route>
        <Route exact path='/addproject'>
          <AddProject handleNewProject={handleNewProject} />
        </Route>
        <Route exact path='/availableprojects'>
          <AvailableProjects 
          projects={projects} 
          onDelete={handleDeleteProject}
          onCompUpdate={handleUpdatedProject}
          onAccepted={handleAcceptedProject}
           />
        </Route>
    </div>
  );
}

export default App;
