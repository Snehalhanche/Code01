import Asidelink from "./Asidelink";
import "./aside.css";

const Aside = () => {
  return (
    <div className="content">
      {/* <div className="highlight">
        <ProfileStats count="57" content="Posts" />
        <ProfileStats count="100" content="Followers" />
        <ProfileStats count="30" content="Following" />
      </div> */}

      <div className="online-profile">
        <Asidelink
          src="assets/M1.jpg"
          displayText="Hannah Macready"
          status="Active"
          statusIcon="assets/green-dot.png"
        />

        <Asidelink
          src="assets/M2.jpg"
          displayText="Averyan R Jackson"
          status="Active"
          statusIcon="assets/green-dot.png"
        />

        <Asidelink
          src="assets/F2.jpg"
          displayText="Daniella Hernandez"
          status="Active"
          statusIcon="assets/green-dot.png"
        />

        <Asidelink
          src="assets/m3.jpg"
          displayText="Harper Robinson"
          status="Active"
          statusIcon="assets/green-dot.png"
        />

        <Asidelink
          src="assets/M1.jpg"
          displayText="Hannah Macready"
          status="Active"
          statusIcon="assets/green-dot.png"
        />

        <Asidelink
          src="assets/M2.jpg"
          displayText="Averyan R Jackson"
          status="Active"
          statusIcon="assets/green-dot.png"
        />

        <Asidelink
          src="assets/F2.jpg"
          displayText="Daniella Hernandez"
          status="Active"
          statusIcon="assets/green-dot.png"
        />

        <Asidelink
          src="assets/m3.jpg"
          displayText="Harper Robinson"
          status="Active"
          statusIcon="assets/green-dot.png"
        />

        <Asidelink
          src="assets/M1.jpg"
          displayText="Hannah Macready"
          status="Active"
          statusIcon="assets/green-dot.png"
        />

        <Asidelink
          src="assets/M2.jpg"
          displayText="Averyan R Jackson"
          status="Active"
          statusIcon="assets/green-dot.png"
        />

        <Asidelink
          src="assets/F2.jpg"
          displayText="Daniella Hernandez"
          status="Active"
          statusIcon="assets/green-dot.png"
        />

        <Asidelink
          src="assets/m3.jpg"
          displayText="Harper Robinson"
          status="Active"
          statusIcon="assets/green-dot.png"
        />
      </div>
    </div>
  );
};

export default Aside;
