import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./layouts/Layout";

import Users from "./pages/Users";
import Home from "./pages/Home";
import UserUpdate from "./components/UserUpdate";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Projects from "./layouts/Projects";
import Tasks from "./layouts/Tasks";
import { useEffect } from "react";

function App() {
  const user = useSelector((store) => store.auth.user);
  const navigate = useNavigate();

  useEffect(() => {

    if (!user) {
      navigate("/login");

    }
  }, [user])

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Users />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/users/:id" element={<UserUpdate />} />
      </Route>
    </Routes>
  );
}

export default App;
