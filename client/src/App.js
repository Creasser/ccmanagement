import { useEffect, useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import UserHomePage from './components/UserHomePage';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import AddProject from './components/AddProject';
import AvailableProjects from './components/AvailableProjects';
//import { UserProvider } from './components/UserContext';
//import { UserContext } from './components/UserContext';
//import { useContext, useEffect } from 'react';

function App() {
const [user, setUser] = useState(null)
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
}, [])

useEffect(() => {
  fetch('/projects')
  .then((r) => {
    if(r.ok){
      r.json().then((projects) => setProjects(projects))
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
  user.projects.push(acceptedProject)
  setUser(user)
}

  return (
    <div className="App">
      {/* <UserProvider> */}
      <NavBar user={user} setUser={setUser} />
        <Route exact path='/'>
          {user ? <UserHomePage user={user} setUser={setUser}/> : <Home />}
      
        </Route>
        <Route exact path='/signup'>
          <SignUp setUser={setUser} />
        </Route>
        <Route exact path='/companylogin'>
          <Login setUser={setUser} />
        </Route>
        <Route exact path='/addproject'>
          <AddProject handleNewProject={handleNewProject} />
        </Route>
        <Route exact path='/availableprojects'>
          <AvailableProjects 
          projects={projects} 
          user={user} 
          onDelete={handleDeleteProject}
          onCompUpdate={handleUpdatedProject}
          onAccepted={handleAcceptedProject}
           />
        </Route>
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
