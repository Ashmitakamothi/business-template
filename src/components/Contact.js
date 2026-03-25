import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ position: "relative" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ color: "var(--accent-pink)", fontWeight: "600", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem" }}>
            Get In Touch
          </div>
          <h2 className="heading-lg">Let's Talk <span className="text-gradient">Business</span></h2>
          <p className="subtitle" style={{ margin: "0 auto" }}>
            Ready to start your next project? Drop us a line and let's create something extraordinary together.
          </p>
        </div>

        <div className="contact-grid">
          
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <MapPin />
              </div>
              <div>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>Our Office</h4>
                <p style={{ color: "var(--text-secondary)" }}>123 Innovation Drive,<br/>Tech City, TX 75001</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon" style={{ background: "rgba(139, 92, 246, 0.1)", color: "var(--accent-purple)", borderColor: "rgba(139, 92, 246, 0.2)" }}>
                <Mail />
              </div>
              <div>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>Email Us</h4>
                <p style={{ color: "var(--text-secondary)" }}>hello@nexuscore.dev<br/>support@nexuscore.dev</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon" style={{ background: "rgba(235, 47, 150, 0.1)", color: "var(--accent-pink)", borderColor: "rgba(235, 47, 150, 0.2)" }}>
                <Phone />
              </div>
              <div>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>Call Us</h4>
                <p style={{ color: "var(--text-secondary)" }}>+1 (555) 123-4567<br/>Mon-Fri 9am - 6pm</p>
              </div>
            </div>
          </div>

          <div className="contact-form" style={{ background: "var(--surface-glass)", padding: "2.5rem", borderRadius: "20px", border: "1px solid var(--border-glass)", backdropFilter: "blur(10px)" }}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" placeholder="John" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" placeholder="Doe" />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="john@example.com" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center", gap: "10px" }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;