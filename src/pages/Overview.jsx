import React from "react";
import "../pages/Overview.css";

export default function Overview( ) {
  return (
    <div className="overview-container  block ">
      <h1 className="overview-title"> Deeps Library </h1>

      <p className="overview-intro ">
        Deeps is a modern React component library designed to help
        developers build consistent, beautiful, and responsive user interfaces
        effortlessly. It’s built with flexibility and simplicity in mind, so you
        can focus on logic while we handle the design.
      </p>

      <section>
        <h2 className="section-title">Introduction</h2>
        <p className="section-intro">
           Deeps provides a set of reusable, customizable React
          components built for production-ready interfaces. Every component is
          crafted to maintain a balance between minimalism and functionality,
          making it easy to integrate into any design system.
        </p>
        <p className="section-intro">
          It supports theming, accessibility, and responsive design  ensuring
          your UI looks great across all devices. Whether you're building a
          dashboard, portfolio, or web app, this library provides everything you
          need to get started quickly.
        </p>
      </section>

      <section>
        <h2 className="section-title">Advantages</h2>
        <ul className="advantages-list">
          <li>
            <strong>Faster development:</strong> Save time with ready-to-use,
            production-quality components built for performance.
          </li>
          <li>
            <strong>Beautiful by default:</strong> Clean design out of the
            box, but easily customizable with your own themes or CSS.
          </li>
          <li>
            <strong>Flexible customization:</strong> Every component supports
            props for styling, behavior, and layout control.
          </li>
          <li>
            <strong>Team collaboration:</strong> Intuitive and consistent
            components make it easy for teams to design and develop together.
          </li>
          <li>
            <strong>Trusted foundation:</strong> Built on modern React
            patterns and best practices for long-term scalability.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="section-title">My UI Library vs. Core</h2>
        <p className="section-intro">
          The main Deeps Library comes with default styling and a built-in theming
          system, while the <strong>Core</strong> version offers unstyled,
          headless components for maximum flexibility.
        </p>
        <p className="section-intro">
          Use the full UI Library when you want polished, ready-to-use
          components. Use Core when you want to build your own design system on
          top of the same strong foundation.
        </p>
      </section>
    </div>
  );
}
