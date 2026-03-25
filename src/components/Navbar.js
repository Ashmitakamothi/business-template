import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} style={{
      background: isScrolled ? "rgba(13, 15, 26, 0.85)" : "rgba(13, 15, 26, 0.2)",
      boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.5)" : "none",
    }}>
      <div className="container">
        <a href="#" className="navbar-brand">
          <span className="brand-dot" /> Nexus
          <span style={{ color: "var(--accent-blue)" }}>Core</span>
        </a>
        
        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`} style={{
          display: mobileMenuOpen ? 'flex' : undefined,
          flexDirection: mobileMenuOpen ? 'column' : 'row',
          position: mobileMenuOpen ? 'absolute' : 'static',
          top: mobileMenuOpen ? '100%' : 'auto',
          left: mobileMenuOpen ? 0 : 'auto',
          width: mobileMenuOpen ? '100%' : 'auto',
          background: mobileMenuOpen ? 'rgba(13, 15, 26, 0.95)' : 'transparent',
          padding: mobileMenuOpen ? '2rem' : '0',
          borderBottom: mobileMenuOpen ? '1px solid var(--border-glass)' : 'none',
          backdropFilter: mobileMenuOpen ? 'blur(10px)' : 'none',
        }}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          {mobileMenuOpen && (
            <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Get Started</button>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn btn-primary" style={{ display: mobileMenuOpen ? 'none' : 'inline-flex', padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
            Get Started
          </button>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;