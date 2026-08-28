import "./AboutLondon.css";

const AboutLondon = () => {
  return (
    <section className="about-london">

      <div className="about-london-image-wrap">
        <img
          src="/images/About/AllSaintsRoadW11.jpg"
          alt="West London"
          className="about-london-image"
        />
      </div>

      <div className="about-london-copy">
        <span>BASED IN</span>

        <strong>
          WEST
          <br />
          LONDON
        </strong>
      </div>

    </section>
  );
};

export default AboutLondon;