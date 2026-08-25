import "./ComingSoon.css";

const ComingSoon = () => {
  return (
    <section className="coming-soon" aria-labelledby="coming-soon-title">
      <div className="coming-soon-content">
        {/* =====================================
            TITLE
        ====================================== */}

        <h2 id="coming-soon-title" className="coming-soon-title">
          <span>COMING SOON TO A</span>
          <span>TV NEAR YOU</span>
        </h2>

        {/* =====================================
            YOUTUBE TRAILER
        ====================================== */}

        <div className="coming-soon-video-wrap">
          <iframe
            className="coming-soon-video"
            src="https://www.youtube.com/embed/HwxaTgaaK58"
            title="QEthing trailer"
            allow="
    accelerometer;
    autoplay;
    clipboard-write;
    encrypted-media;
    gyroscope;
    picture-in-picture;
    web-share
  "
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
