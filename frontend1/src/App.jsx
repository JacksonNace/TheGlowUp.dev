import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Tasks from './pages/Tasks'
import Account from './pages/Account'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/Account" element={<Account />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
