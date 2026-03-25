import React from "react";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="hero-content">
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.5rem 1rem",
            background: "var(--surface-glass)",
            borderRadius: "50px",
            border: "1px solid var(--border-glass)",
            marginBottom: "2rem",
            fontSize: "0.85rem",
            color: "var(--accent-blue)",
            fontWeight: "500",
            letterSpacing: "1px",
            textTransform: "uppercase"
          }}>
            <span style={{ marginRight: "10px", width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-blue)", display: "inline-block", boxShadow: "var(--glow-blue)" }}></span>
            Next Gen Business Solutions
          </div>
          
          <h1 className="heading-xl">
            Scale Your Business<br />
            With <span className="text-gradient">Innovations</span>
          </h1>
          
          <p className="subtitle">
            We provide cutting-edge digital experiences, seamless integrations, and modern design systems to elevate your brand to the next level. Build the future with NexusCore.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">
              Start Your Journey <ArrowRight size={18} style={{ marginLeft: "8px" }} />
            </button>
            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={14} fill="currentColor" />
              </div>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;