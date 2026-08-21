import "./DeviceLink.css";

const DeviceLink = () => {
  return (
    <div className="device-link">

      {/* TV */}
      <img
        className="device-link-tv"
        src="/images/Customisation/TVScreen.png"
        alt="QEthing displayed on a TV"
      />

      {/* Animated connection between laptop and TV */}
      <svg
        className="device-link-connector"
        viewBox="0 0 1000 420"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="device-link-path"
          d="
            M 825 250
            L 825 165
            C 825 105, 785 75, 720 75
            L 485 75
            C 410 75, 380 115, 380 185
            L 380 270
          "
        />
      </svg>

      {/* Laptop */}
      <img
        className="device-link-laptop"
        src="/images/Customisation/LapTop.png"
        alt="QEthing question creator displayed on a laptop"
      />

    </div>
  );
};

export default DeviceLink;