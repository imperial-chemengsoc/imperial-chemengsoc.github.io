import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./modules/NavBar.js";
import BottomBanner from "./modules/BottomBanner.js";

import NotFound from "./pages/NotFound.js";
import Accessibility from "./pages/Accessibility.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Committee from "./pages/Committee.js";
import WhatsOn from "./pages/whatson/WhatsOn.js";
import Event from "./pages/whatson/Event.js";
import Profile from "./pages/Profile.js";
import Contact from "./pages/Contact.js";

import "../utilities.css";

// import { get, post } from "../utilities";

const App = () => {
  // const [userId, setUserId] = useState(undefined);
  // const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  //   get("/api/whoami").then((user) => {
  //     if (user._id) {
  //       // they are registerd in the database, and currently logged in.
  //       setUserId(user.googleid)
  //       // setCurrentUser(user)
  //       console.log(`You are currently logged in as ${user.name}`)
  //     }
  //   });
  // }, []);

  // const handleLogin = (credentialResponse) => {
  //   const userToken = credentialResponse.credential;
  //   const decodedCredential = jwt_decode(userToken);
  //   console.log(`Logged in as ${decodedCredential.name}`);
  //   post("/api/login", { token: userToken }).then((user) => {
  //     setUserId(user.googleid);
  //   });
  // };

  // const handleLogout = () => {
  //   setUserId(undefined);
  //   post("/api/logout");
  // };

  // console.log(currentUser);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Committee" element={<Committee />} />
        <Route exact path="/profile/:userName" element={<Profile />} />
        <Route exact path="/events/:eventId" element={<Event />} />
        <Route exact path="/whatson" element={<WhatsOn />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/privacyaccessibility" element={<Accessibility />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomBanner />
    </Router>
  );
};

export default App;
