import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";
import "./HomePage.css";

const Home: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isSent, setIsSent] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bvr9byy", // 你的 Service ID
        "template_zscwr2g", // 替换为你的 Template ID
        e.target as HTMLFormElement,
        "WkL486UDoiX9TdUEn" // 替换为你的 Public Key
      )
      .then(() => {
        setIsSent("success");
        setTimeout(() => {
          setIsSent("idle");
        }, 3000);
      })
      .catch((error: any) => {
        // 发送失败
        console.error("Error sending email", error);
        setIsSent("error");
        // 5秒后重置状态，让用户可以重试
        setTimeout(() => setIsSent("idle"), 3000);
      });
  };

  return (
    <div className="home">
      {/* Header */}
      <div className="hero-info-wrapper">
        <header className="header">
          <div className="logo">
            <img
              src="/images/harbor-logo-symbol-white.svg"
              alt="Harbor Lutheran Church"
              className="logo-img"
            />
          </div>
          <nav className="nav">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </button>
            <button
              className=""
              onClick={() => {
                document
                  .getElementById("about-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </button>
            <button
              className=""
              onClick={() => {
                document
                  .getElementById("contact-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </button>
            <button
              className=""
              onClick={() => {
                document
                  .getElementById("about-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Sermons
            </button>
            <button
              className=""
              onClick={() => {
                document
                  .getElementById("about-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Resources
            </button>
            <button
              className="btn btn-outline"
              onClick={() => {
                document
                  .getElementById("contact-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Give
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                document
                  .getElementById("contact-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in touch
            </button>
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
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 256 256"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M228.92 49.69a8 8 0 0 0-6.86-1.45l-61.13 15.28l-61.35-30.68a8 8 0 0 0-5.52-.6l-64 16A8 8 0 0 0 24 56v144a8 8 0 0 0 9.94 7.76l61.13-15.28l61.35 30.68a8.15 8.15 0 0 0 3.58.84a8 8 0 0 0 1.94-.24l64-16A8 8 0 0 0 232 200V56a8 8 0 0 0-3.08-6.31M104 52.94l48 24v126.12l-48-24Zm-64 9.31l48-12v127.5l-48 12Zm176 131.5l-48 12V78.25l48-12Z"
                  />
                </svg>
              </div>
              <h3 className="info-title">Cambridge, MA</h3>
              <p className="info-text">288 Norfolk Street</p>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m12 6l-7.718 4.824a.6.6 0 0 0-.282.508V21.4a.6.6 0 0 0 .6.6H12m0-16l7.718 4.824a.6.6 0 0 1 .282.508V21.4a.6.6 0 0 1-.6.6H12m0-16V4m0-2v2m-2 0h2m0 0h2m-2 18v-5m4 .01l.01-.011M16 13.01l.01-.011M12 13.01l.01-.011M8 13.01l.01-.011M8 17.01l.01-.011"
                  />
                </svg>
              </div>
              <h3 className="info-title">Worship</h3>
              <p className="info-text">Sunday at 10am</p>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 30h-4a2 2 0 0 1-2-2v-7a2 2 0 0 1-2-2v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a2 2 0 0 1-2 2v7a2 2 0 0 1-2 2m-5-18a.94.94 0 0 0-1 1v6h2v9h4v-9h2v-6a.94.94 0 0 0-1-1zm3-3a4 4 0 1 1 4-4a4 4 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2" />
                </svg>
              </div>
              <h3 className="info-title">Pastor</h3>
              <p className="info-text">Rev. Joshua Koelpin</p>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z" />
                </svg>
              </div>
              <h3 className="info-title">Contact</h3>
              <p className="info-text">pastorjosh@harborlutheran.com</p>
            </div>
          </div>
        </section>
      </div>

      {/* 合并的 Newsletter 和 Bible Study Section */}
      <section className="newsletter" id="about-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <div className="newsletter-image">
              <img
                src="/images/josh-katelyn.png"
                alt="Pastor Josh and Katelyn"
                className="pastor-photo"
              />
            </div>
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
          <div className="bible-content">
            <div className="bible-image">
              <img
                src="/images/bible_study_noise.avif"
                alt="Bible Study"
                className="bible-img"
              />
            </div>
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
      <section className="contact" id="contact-section">
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
            {/* 状态提示 */}
            {isSent === "success" && (
              <div className="success-message">
                Success! I will get back to you as soon as possible.
              </div>
            )}

            {isSent === "error" && (
              <div className="error-message">
                Failed to send message. Please try again later.
              </div>
            )}

            {isSent === "sending" && (
              <div className="sending-message">Sending your message...</div>
            )}
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  placeholder="Jon Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSent === "sending"} // 发送时禁用
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="name@example.com"
                  disabled={isSent === "sending"} // 发送时禁用
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Type your message..."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  disabled={isSent === "sending"} // 发送时禁用
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn"
                disabled={isSent === "sending"}
              >
                {isSent === "sending" ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
