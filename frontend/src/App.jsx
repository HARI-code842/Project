import React, { useEffect } from 'react'
import Home from './pages//Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import { EventDetails } from './pages/EventDetails'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import EventLists from './pages/EventLists'
import Profile from './pages/Profile'
import ViewEventDetails from './components/ViewEventDetails/ViewEventDetails'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from './store/auth'
import Favourites from './components/Profile/Favourites'
import Settings from './components/Profile/Settings'
import Addevent from './pages/Addevent'
import UpdateEvent from './pages/UpdateEvent'
const App = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  useEffect (() => {
      if(
        localStorage.getItem("id")&&
        localStorage.getItem("token")&&
        localStorage.getItem("role")
    ){
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  },[]);
  return (
    <div>
       
      <Navbar />
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route   path="/event-details" element={<EventDetails/>} />
        <Route   path="/event-lists" element={<EventLists/>} />
        <Route   path="/profile" element={<Profile />} >
        {role == "user" ? <Route index element={<Favourites />}/> :<Route index element={<Addevent />}/>}
        <Route path ="/profile/settings" element={<Settings />}/>
        </Route>
        <Route   path="/sign-in" element={<LogIn />} />
        <Route   path="/sign-up" element={<SignUp />} />
        <Route   path="/updateEvent/:id" element={<UpdateEvent />} />
        <Route   path="view-event-details/:id" element={<ViewEventDetails />} />
      </Routes>
      <Footer />
     
      
      
    </div>
  )
}

export default App