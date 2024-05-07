import Sectionlink from "../Sections/Sectionlink";
import "../Sections/Section01";

const Section01 = () => {
  const posts = [
    {
      id: "MyImage",
      src: "assets/post01.jpg",
      offStatus: "assets/off-like.png",
      comment: "assets/comment.jpg",
      share: "assets/share01.jpg",
    },
    {
      id: "MyImage01",
      src: "assets/post02.jpg",
      offStatus: "assets/off-like.png",
      comment: "assets/comment.jpg",
      share: "assets/share01.jpg",
    },
    {
      id: "MyImage02",
      src: "assets/post03.jpg",
      offStatus: "assets/off-like.png",
      comment: "assets/comment.jpg",
      share: "assets/share01.jpg",
    },
  ];
  const getPostsUsingMap = () => {
    return posts.map((post) => {
      return (
        <Sectionlink
          id={post.id}
          src={post.src}
          offStatus={post.offStatus}
          comment={post.comment}
          share={post.share}
        />
      );
    });
  };

  return (
    <div className="wrap-section">
      <div className="live-feed">
        <div className="image">
          <img src="assets/F1.jpg" alt="Profile-01" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="What's on your mind?" />
        </div>
        <div className="upload">
          <label for="file-input">
            <img
              src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
              alt="Upload Icon"
            />
          </label>
          <input id="file-input" type="file" accept="image/*" />
        </div>
        <div className="Submit">
          <button type="Submit">Post</button>
        </div>
      </div>
      <div className="wrap-posts">
        {getPostsUsingMap()}

        {/* <Sectionlink
          id="MyImage"
          src="assets/post01.jpg"
          offStatus="assets/off-like.png"
          comment="assets/comment.jpg"
          share="assets/share01.jpg"
        />
        <Sectionlink
          id="MyImage01"
          src="assets/post02.jpg"
          offStatus="assets/off-like.png"
          comment="assets/comment.jpg"
          share="assets/share01.jpg"
        />
        <Sectionlink
          id="MyImage02"
          src="assets/post03.jpg"
          offStatus="assets/off-like.png"
          comment="assets/comment.jpg"
          share="assets/share01.jpg"
        /> */}
      </div>

      {/* <div className="add-post">
        <div className="image-post">
          <img src="assets/post01.jpg" />
        </div>
        <div className="like">
          <img
            id="myImage"
            onClick={() => changeImage()}
            src="assets/off-like.png"
            alt="Status-Change"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Section01;
