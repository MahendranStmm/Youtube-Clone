import React, { useState } from "react";
import Login from "./components/Login";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Contents from "./components/Contents/Contents";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="app">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <Header user={user} />
          <div className="body">
            <Sidebar />
            <Contents />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
