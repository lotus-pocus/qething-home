import "./NewPacksFeature.css";

const NewPacksFeature = () => {
  return (
    <section className="new-packs-feature">

      {/* =====================================
          FEATURE VIDEO
      ====================================== */}

      <div className="new-packs-feature-media">

        <video
          className="new-packs-feature-video"
          src="/video/NewPacksFeature/web_packSelect.mp4"
          autoPlay
          muted
          loop
          playsInline
        />


        {/* =====================================
            COPY
        ====================================== */}

        <div className="new-packs-feature-copy">

          <h2 className="new-packs-feature-title">
            <span>PACKS</span>
            <span>DEPLOYED</span>
            <span>INSTANTLY</span>
          </h2>

        </div>


        {/* =====================================
            GREEN BOTTOM DIVIDER
        ====================================== */}

        

      </div>

    </section>
  );
};

export default NewPacksFeature;