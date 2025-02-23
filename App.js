import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="content">
      <h1>Welcome to Project Manager</h1>
      <p>Manage all your projects efficiently in one place.</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="content">
      <h1>Dashboard</h1>
      <p>Overview of all your projects and progress.</p>
    </div>
  );
}

function Login() {
  return (
    <div className="content">
      <h1>Login</h1>
      <p>Access your account and manage your projects.</p>
      <input type="text" placeholder="Email" className="input-box" />
      <input type="password" placeholder="Password" className="input-box" />
      <button className="btn">Login</button>
    </div>
  );
}

function Signup() {
  return (
    <div className="content">
      <h1>Signup</h1>
      <p>Create an account to start managing projects.</p>
      <input type="text" placeholder="Name" className="input-box" />
      <input type="email" placeholder="Email" className="input-box" />
      <input type="password" placeholder="Password" className="input-box" />
      <button className="btn">Signup</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="logo">Project Manager</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
