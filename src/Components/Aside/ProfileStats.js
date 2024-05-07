import "./aside.css";

const ProfileStats = (props) => {
  return (
    <div className="posts">
      <h1>{props.count}</h1>
      <h2>{props.content}</h2>
    </div>
  );
};

export default ProfileStats;
