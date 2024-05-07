import Share from "./Share";
import "./contact.css";

const Contact = () => {
  return (
    <div className="wrap-contacts">
      <div className="top-section">
        <div className="contacts">
          <Share profile="assets/F3.jpg" />
          <Share profile="assets/M3.jpg" />
          <Share profile="assets/F4.jpg" />
          <Share profile="assets/M4.jpg" />
          <Share profile="assets/F5.jpg" />
          <Share profile="assets/M5.jpg" />
          <Share profile="assets/F6.jpg" />
          <Share profile="assets/M6.jpg" />
          <Share profile="assets/F7.jpg" />
          <Share profile="assets/M7.jpg" />
          <Share profile="assets/F8.jpg" />
          <Share profile="assets/M8.jpg" />
        </div>
        {/*         
        <div className="contacts">
          <div className="multiple-contacts">
            <img src="assets/F1.jpg" alt="Profile" />
          </div>
          <div className="multiple-contacts">
            <img src="assets/F1.jpg" alt="Profile" />
          </div>
          <div className="multiple-contacts">
            <img src="assets/F1.jpg" alt="Profile" />
          </div>
          <div className="multiple-contacts">
            <img src="assets/F1.jpg" alt="Profile" />
          </div>
          <div className="multiple-contacts">
            <img src="assets/F1.jpg" alt="Profile" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
