import React from "react";
import { Monitor, Cpu, Paintbrush, Globe, Smartphone, Shield } from "lucide-react";

const servicesData = [
  {
    icon: <Monitor />,
    title: "Web Development",
    desc: "We build scalable, high-performance web applications using modern tech stacks."
  },
  {
    icon: <Paintbrush />,
    title: "UI/UX Design",
    desc: "Create beautiful, intuitive user interfaces that boost engagement and retention."
  },
  {
    icon: <Globe />,
    title: "SEO Optimization",
    desc: "Improve your search rankings and drive organic traffic to your platform."
  },
  {
    icon: <Smartphone />,
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications that perform natively on iOS and Android."
  },
  {
    icon: <Shield />,
    title: "Cyber Security",
    desc: "Protect your infrastructure from vulnerabilities with state-of-the-art security."
  },
  {
    icon: <Cpu />,
    title: "Cloud Solutions",
    desc: "Seamless cloud migrations and infrastructure management for enterprise scalability."
  }
];

const Services = () => {
  return (
    <section id="services" className="section" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ color: "var(--accent-purple)", fontWeight: "600", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem" }}>
            Our Capabilities
          </div>
          <h2 className="heading-lg">Premium <span className="text-gradient">Services</span></h2>
          <p className="subtitle" style={{ margin: "0 auto" }}>
            Everything you need to successfully run, manage, and scale your business online.
          </p>
        </div>

        <div className="grid services-grid">
          {servicesData.map((s, idx) => (
            <div className="card" key={idx}>
              <div className="card-icon">
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;