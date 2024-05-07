import "./aside.css";

const Asidelink = (props) => {
  return (
    <div className="online-profiles">
      <img src={props.src} alt="profile-img" />
      <h1>{props.displayText}</h1>
      <div className="active">
        <h1>{props.status}</h1>
        <img src={props.statusIcon} alt="status-icon" />
      </div>
    </div>
  );
};

export default Asidelink;
