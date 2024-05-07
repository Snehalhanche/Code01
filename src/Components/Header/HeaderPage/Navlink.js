// import { Link } from "react-router-dom";
const Navlink = (props) => {
  return (
    <div className="side-profiles">
      <img src={props.src} alt={props.displayText} />
      <h4>{props.displayText}</h4>
    </div>
  );
};

export default Navlink;
