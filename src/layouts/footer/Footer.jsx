import React from "react";
import "./Footer.css";

const Footer = () => {
  const time = new Date();
  const year = time.getFullYear();
  return (
    <footer className="footer ">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">Product</h4>
          <ul className="footer-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#changelog">Changelog</a>
            </li>
            <li>
              <a href="#docs">Documentation</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Community</h4>
          <ul className="footer-links">
            <li>
              <a href="#discord">Discord</a>
            </li>
            <li>
              <a href="https://github.com/dipendrabhandariofficial/React-Intership-Amnil">
                GitHub
              </a>
            </li>
            <li>
              <a href="#twitter">Twitter</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Resources</h4>
          <ul className="footer-links">
            <li>
              <a href="#guides">Guides</a>
            </li>
            <li>
              <a href="#tutorials">Tutorials</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
            <li>
              <a href="#api">API Reference</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom ">
        <p className="footer-copyright text-justify-center">
          © {year} Deeps UI. <br/> All rights reserved.
        </p>
        <div className="footer-social">
          <a
            href="https://github.com/dipendrabhandariofficial/React-Intership-Amnil"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dipendrabhandariofficial/"
            target="_blank"
            className="social-link"
          >
            LinkedIn
          </a>
          <a href="#discord" className="social-link">
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
