import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './Views/Login'
import Register from './Views/Register'
import ResetPassword from './Views/ResetPassword'
import WelcomeUser from './Views/WelcomeUser'
import Forgotpassword from './Views/Forgotpassword'
import Layout from './Layout/Layout'
import Projects from './Views/Projects'
import Notifications from './Views/Notification'
import User from './Views/User'
import AdminWelcom from './Views/AdminWelcom'
import Profile from './Views/Profile'
import InvitedUser from './Views/InvitedUser'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/welcome" element={<Layout>< WelcomeUser /></Layout>} />
          <Route exact path="/welcome-admin" element={<Layout>< AdminWelcom /></Layout>} />
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset-password/:token" element={<ResetPassword />} />
          <Route exact path="/forgot-password" element={<Forgotpassword />} />
          <Route exact path="/projects" element={<Layout><Projects /></Layout>} />
          <Route exact path="/users" element={<Layout><User /></Layout>} />
          <Route exact path="/profile" element={<Layout><Profile /></Layout>} />
          <Route exact path="/notification" element={<Layout><Notifications /></Layout>} />
          <Route exact path="/invited-user/:token" element={<InvitedUser />} />
        
        </Routes>
      </Router>
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
    </>
  )
}

export default App
