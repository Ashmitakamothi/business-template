import React from "react";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-image">
          {/* Using unsplash image placeholder for a premium feel */}
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="About our software" />
        </div>
        
        <div className="about-content">
          <div style={{ color: "var(--accent-blue)", fontWeight: "600", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem" }}>
            Who We Are
          </div>
          <h2 className="heading-lg">Building Software <br /> The <span style={{ color: "var(--accent-blue)" }}>Right Way</span></h2>
          
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.05rem" }}>
            We are a team of passionate engineers, designers, and strategists dedicated to delivering innovative software solutions. We don't just write code; we solve complex business problems with cutting-edge technology.
          </p>

          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
            {[
              "Agile development methodology",
              "100% transparent communication",
              "Enterprise-grade security standards",
              "Award-winning UI/UX design teams"
            ].map((item, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "1rem", color: "var(--text-primary)" }}>
                <CheckCircle size={20} color="var(--accent-blue)" />
                {item}
              </li>
            ))}
          </ul>

          <button className="btn btn-primary">Discover Our Story</button>
        </div>
      </div>
    </section>
  );
};

export default About;
