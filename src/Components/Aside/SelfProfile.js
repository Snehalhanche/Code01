import "./aside.css";

const SelfProfile = (props) => {
  return (
    <div className="vistor">
      <h1>{props.no}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default SelfProfile;
