import "../../App.css";
// import Header from "../../Components/Header/Header";
import Aside from "../../Components/Aside/Aside";
import Section01 from "../../Components/Sections/Section01";
import ProfileStats from "../../Components/Aside/ProfileStats";
import SelfProfile from "../../Components/Aside/SelfProfile";

function Home() {
  return (
    <div className="App">
      <div className="combined">
        <div className="self-profile">
          <div className="highlight">
            <ProfileStats count="57" content="Posts" />
            <ProfileStats count="100" content="Followers" />
            <ProfileStats count="30" content="Following" />
          </div>
          <SelfProfile no="73" text="Who's viewed your profile" />
          <SelfProfile no="90" text="View of your posts" />
        </div>
        <Section01 />
        <Aside />
      </div>
    </div>
  );
}

export default Home;
