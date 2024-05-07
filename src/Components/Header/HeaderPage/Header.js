import "./headers.css";
import "../HeaderPage/Navlink";
import Navlink from "../HeaderPage/Navlink";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrap">
        <div className="nav">
          <img src="assets/F1.jpg" alt="Profile-01" />
          <div className="bio">
            <h1>Snehal Hanche</h1>
            <p>Life is short, happiness comes with living ambitiously</p>
          </div>
        </div>
      </div>

      <div className="updates">
        <div className="side-nav">
          <Link to="/Home">
            <Navlink src="assets/home01.jpg" displayText="My Profile" />
          </Link>
          <Link to="/Status">
            <Navlink src="assets/Status.png" displayText="Status" />
          </Link>
          <Link to="/Messages">
            <Navlink src="assets/messages.jpg" displayText="Messages" />
          </Link>
          <Link to="/Friends">
            <Navlink src="assets/community.jpg" displayText="Friends" />
          </Link>
        </div>
      </div>

      {/* <div className="updates">
                <div className="side-nav">
                    <div className="side-profiles">
                        <img src="assets/home01.jpg" />
                        <a href="#Home">My Profile</a>
                    </div>
                    <div className="side-profiles">
                        <img src="assets/community.jpg" />
                        <a href="#">Friends</a>
                    </div>
                    <div className="side-profiles">
                        <img src="assets/messages.jpg" />
                        <a href="#">Messages</a>
                    </div>
                    <div className="side-profiles">
                        <img src="assets/Status.png" />
                        <a href="#">Status</a>
                    </div>
                </div>
                <div className="side-profile">
                    <input type='search' placeholder='Search-food,celebrity,friends'></input>
                    <img src="assets/search01.png" />
                </div>
            </div> */}
      <div className="btn">
        <div className="btn-new">
          <button onClick={newAccount}>Create New</button>
        </div>
        <div className="btn-sign">
          <button onClick={myFunction}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

function myFunction() {
  return (document.getElementById("root").innerHTML = "Welcome to our page");
}

function newAccount() {
  return (document.getElementById("root").innerHTML = "Welcome to our page");
}

export default Header;
