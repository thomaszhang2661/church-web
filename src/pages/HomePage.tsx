import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./HomePage.css";

const Home: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", { name, email, message: contactMessage });
    setName("");
    setContactMessage("");
  };

  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img
            src="/images/harbor-logo-symbol-white.svg"
            alt="Harbor Lutheran Church"
            className="logo-img"
          />
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#give" className="btn btn-outline">
            Give
          </a>
          <a href="#contact" className="btn btn-primary">
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-logo">
            <img
              src="/images/harbor-logo-symbol-white.svg"
              alt="Harbor Lutheran Church"
              className="hero-logo-img"
            />
          </div>
          <h1>HARBOR</h1>
          <p className="subtitle">LUTHERAN CHURCH</p>
        </div>
      </section>

      {/* Info Bar */}
      <section className="info-bar">
        <div className="info-grid">
          <div className="info-item">
            <div className="info-icon">
              <img src="/images/icons/location.svg" alt="Location" />
            </div>
            <h3 className="info-title">Cambridge, MA</h3>
            <p className="info-text">288 Norfolk Street</p>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <img src="/images/icons/worship.svg" alt="Worship" />
            </div>
            <h3 className="info-title">Worship</h3>
            <p className="info-text">Sunday at 10am</p>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <img src="/assets/icons/pastor.svg" alt="Pastor" />
            </div>
            <h3 className="info-title">Pastor</h3>
            <p className="info-text">Rev. Joshua Koelpin</p>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <img src="/assets/icons/contact.svg" alt="Contact" />
            </div>
            <h3 className="info-title">Contact</h3>
            <p className="info-text">pastorjosh@harborlutheran.com</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2>Updates coming soon, let's stay connected</h2>
            <p>
              Get on the email list to get updates about worship, Bible studies,
              devotions, and new website resources we're adding soon.
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Get updates</button>
            </form>
          </div>
          <div className="newsletter-image">
            <img
              src="/images/josh-katelyn.png"
              alt="Pastor Josh and Katelyn"
              className="pastor-photo"
            />
          </div>
        </div>
      </section>

      {/* Bible Study Section */}
      <section className="bible-study">
        <div className="bible-container">
          <div className="bible-image">
            <img
              src="/images/bible_study_noise.avif"
              alt="Bible Study"
              className="bible-img"
            />
          </div>
          <div className="bible-content">
            <div className="bible-verse">John 8:12</div>
            <blockquote className="bible-quote">
              When Jesus spoke again to the people, he said, "I am the light of
              the world. Whoever follows me will never walk in darkness, but
              will have the light of life."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <p>Write your message in the form and I'll get back to you.</p>

            <div className="contact-details">
              <div className="contact-item">
                <Mail size={20} />
                <span>pastorjosh@harborlutheran.com</span>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <span>+1 (507) 766 0674</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>288 Norfolk Street, Cambridge, MA</span>
              </div>
            </div>

            <div className="contact-logo">
              <img
                src="/images/harbor-logo-symbol-gold.svg"
                alt="Harbor Lutheran Church"
                className="contact-logo-img"
              />
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Jon Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Type your message..."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
