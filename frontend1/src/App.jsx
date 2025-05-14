import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Tasks from './pages/Tasks'
import Account from './pages/Account'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Courses from './pages/Courses'
import AboutUs from './pages/AboutUs'
import ExampleBlog from './pages/ExampleBlog'
import Hero from './pages/Hero'
import WhatIsThis from './pages/WhatIsThis'
import QnA from './pages/QnA'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <WhatIsThis />
                <QnA />
                <Contact />
              </>
            } />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<ExampleBlog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
