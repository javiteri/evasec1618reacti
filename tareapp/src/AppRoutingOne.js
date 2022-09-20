import React, {useEffect} from 'react';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter as Router, Link, Route, Routes, Navigate} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/auth/LoginPage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {
  
  let logged=false
  let taskList=[
    {
      id:1,
      name:'Task 1',
      decription:'My first Task'
    },
    {
      id:2,
      name:'Task 2',
      decription:'My Second Task'
    }
  ]
  
  useEffect(() => {
    //logged = localStorage.getItem('credentials');//Se obtiene el valor de la URL desde el navegador
    
  }, []);


function buscarid(){
    var actual = window.location+'';
    //Se realiza la división de la URL
    var split = actual.split("/");
    //Se obtiene el ultimo valor de la URL
    let id = split[split.length-1];
    //alert(id)
    return id
}

return (
    <Router>
      <div>
      <h1>Task - {buscarid()}  </h1>
      <nav
        style={{ borderBottom: "solid 1px", paddingBottom: "1rem"}}>
        <Link to='/'>||Home </Link>
        <Link to='/about'>||About </Link>
        <Link to='/faqs'>||Faqs </Link>
        <Link to='/task/1' onClick={buscarid()}>||Task 1</Link>
        <Link to='/task/2' onClick={buscarid()}>||Task 2 </Link>
        <Link to='/login'>|| Login </Link>
        <Link to='/404'>||Not existing Route </Link>
      </nav>
      <h1>AppRoutingOne</h1>
      <main>
          {/* 👇️ Wrap your Route components in a Routes component */}
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/online-state" element={<StatePage />} />
            <Route exact path="/login" element={ logged ?  <Navigate to="/" replace/>: <LoginPage />} />
            {['about', 'faqs'].map((path) => (
              <Route path={path} element={<AboutPage />} />
            ))}
            <Route exact path="/profile" element={ logged ?  <ProfilePage />: <Navigate to="/login/" replace/>} />
            <Route exact path="/tasks" element={<TasksPage />} />
            {/*<Route exact path="/task/:id" element={<TaskDetailPage />}/>*/}
            {/*<Route exact path="/task/:id" render={({match}) =>
             <TaskDetailPage task={taskList[match.params.id-1]} />
            }/>*/}
            <Route 
            exact 
            path='/task/:id'
            element={
              (<TaskDetailPage task={taskList[buscarid()-1]}/>)
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>    
      </div>
    </Router>
  );
}

export default  AppRoutingOne;