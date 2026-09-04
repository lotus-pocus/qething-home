import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact-page">
      <div className="contact-page-content">

        <header className="contact-page-header">
          <h1 className="contact-page-title">
            CONTACT
          </h1>

          <p className="contact-page-intro">
            Want to know more about QEthing?
            <br />
            Come and say hello.
          </p>
        </header>


        <section className="contact-details">

          <div className="contact-details-copy">

            <p className="contact-eyebrow">
              FIND US IN LONDON
            </p>

            <h2 className="contact-studio-title">
              QEthing Studio
            </h2>

            <address className="contact-address">
              Studio 8
              <br />
              18 All Saints Road
              <br />
              London
              <br />
              W11 1HH
            </address>

            <div className="contact-email-block">
              <p className="contact-eyebrow">
                GET IN TOUCH
              </p>

              <a
                href="mailto:hello@qething.studio"
                className="contact-email"
              >
                hello@qething.studio
              </a>
            </div>

          </div>


          <div className="contact-map">
            <iframe
              title="QEthing studio location"
              src="https://www.google.com/maps?q=18+All+Saints+Road,+London,+W11+1HH&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </section>

      </div>
    </main>
  );
};

export default Contact;