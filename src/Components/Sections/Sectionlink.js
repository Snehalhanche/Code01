import { Link } from "react-router-dom";
import "./section.css";
import "./Section01";

const Sectionlink = (props) => {
  return (
    <div className="add-post">
      <div className="image-post">
        <img src={props.src} alt="post" />
      </div>
      <div className="response">
        <div className="like">
          <img
            id={props.id}
            onClick={() => changeImage()}
            src={props.offStatus}
            alt="Status-Change"
          />
        </div>
        <div className="comment">
          <img src={props.comment} alt="Comment" />
        </div>
        <div className="share">
          <button>
            <Link to="/share">
              <img src={props.share} onClick={Action} alt="Share" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );

  function Action() {
    return (
      <button>
        <img src={props.share} onClick={Action} alt="Share" />
      </button>
    );
  }

  function changeImage() {
    var image = document.getElementById(props.id);
    if (image.src.match("on")) {
      image.src = "assets/off-like.png";
    } else {
      image.src = "assets/on-like.jpg";
    }
  }
};

export default Sectionlink;
