import "./App.css";
// import Header from "./Components/Header/Header";
// import Aside from "./Components/Aside/Aside";
// import Section01 from "./Components/Sections/Section01";
// import ProfileStats from "./Components/Aside/ProfileStats";
// import SelfProfile from "./Components/Aside/SelfProfile";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Contact from "./Components/SharingComponents/Contacts/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<div>This is Testing</div>}></Route>
        {/* <Route path="/share" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
