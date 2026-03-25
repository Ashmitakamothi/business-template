import React from "react";
import { Globe, MessageSquare, Code, Hash, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          
          <div className="footer-col">
            <h3 className="navbar-brand" style={{ marginBottom: "1.5rem" }}>
              <span className="brand-dot" /> Nexus<span style={{ color: "var(--accent-blue)" }}>Core</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "300px" }}>
              Empowering businesses with modern digital solutions. We turn your ideas into functional realities.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="/" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", transition: "var(--transition-fast)" }} className="social-icon">
                <Globe size={18} />
              </a>
              <a href="/" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", transition: "var(--transition-fast)" }} className="social-icon">
                <MessageSquare size={18} />
              </a>
              <a href="/" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", transition: "var(--transition-fast)" }} className="social-icon">
                <Code size={18} />
              </a>
              <a href="/" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", transition: "var(--transition-fast)" }} className="social-icon">
                <Hash size={18} />
              </a>
            </div>
            {/* Inline style hack for hover effect since social-icon isn't fully defined in CSS, but global CSS is better */}
            <style dangerouslySetInnerHTML={{__html: `
              .social-icon:hover { background: var(--accent-blue) !important; color: white; transform: translateY(-3px); box-shadow: var(--glow-blue); }
            `}} />
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <div className="footer-links">
              <a href="#about">About Us</a>
              <a href="#services">Careers</a>
              <a href="/">News & Media</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <div className="footer-links">
              <a href="/">Web Development</a>
              <a href="/">Mobile Apps</a>
              <a href="/">UI/UX Design</a>
              <a href="/">Cloud Hosting</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Newsletter</h4>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "0.9rem" }}>Subscribe to our newsletter for the latest updates.</p>
            <div style={{ display: "flex", background: "var(--surface-glass)", borderRadius: "50px", padding: "0.3rem", border: "1px solid var(--border-glass)" }}>
              <input type="email" placeholder="Your Email" style={{ background: "transparent", border: "none", color: "white", padding: "0.5rem 1rem", width: "100%", outline: "none", fontSize: "0.9rem" }} />
              <button style={{ background: "var(--accent-blue)", border: "none", borderRadius: "50px", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#000" }}>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NexusCore Inc. All rights reserved. Designed for the Future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;