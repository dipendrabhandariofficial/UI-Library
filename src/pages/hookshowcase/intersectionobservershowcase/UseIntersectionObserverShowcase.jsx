import React, { useRef, useState } from "react";
import ShowcaseContainer from "../../showcase/ShowcaseContainer";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import "../intersectionobservershowcase/UseintersectionObserverShowcase.css";

export default function IntersectionObserverShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRootRef = useRef(null);
  const observeRef= useRef(null);

  const { ref, isIntersecting } = useIntersectionObserver({
    root: scrollRootRef.current,
    target:observeRef,
    once: false,
    threshold: 0.5,
    onEnter: () => {
      setIsVisible(true);
      console.log("Element entered ✅");
    },
    onLeave: () => {
      setIsVisible(false);
      console.log("Element left ❌");
    },
  });

  const usageCode = `
import { useRef, useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

export default function Example() {
  const boxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useIntersectionObserver({
    target: boxRef,
    threshold: 0.9,
    root: null,
    once: false,
    onEnter: () => setIsVisible(true),
    onLeave: () => setIsVisible(false),
  });


  return (
    <div
      ref={boxRef}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: isVisible ? "green" : "gray",
        transition: "background-color 0.3s",
      }}
    >
      {isVisible ? "Visible" : "Not Visible"}
    </div>
  );
}
`;

  return (
    <div className="intersection-showcase-container" id="123">
      <h2 className="intersection-showcase-title">
        useIntersectionObserver Hook
      </h2>

      <p className="intersection-showcase-intro">
        <code>useIntersectionObserver</code> lets you detect when an element
        enters or leaves the viewport. Great for lazy-loading, animations, or
        analytics triggers.
      </p>

      <ShowcaseContainer title="UseintersectionObserver Demo" code={usageCode}>
        <div ref={scrollRootRef}
          style={{
            height: "250px",
            overflowY: "auto",
            border: "2px solid #ccc",
            padding: "10px",
          }}
        >
          <div style={{ height: "600px", paddingTop: "200px" }}>
            <div ref={observeRef} className="intersection-demo-box">
              <div
                className={`observer-box ${isVisible ? "visible" : "hidden"}`}
              >
                {isIntersecting ? "Visible" : "Not Visible"}
              </div>
            </div>
          </div>
        </div>
      </ShowcaseContainer>
      {/* ------------------- DO / DON'T SECTION ------------------- */}
      <section className="ls-best-practices-section">
        <h2 className="ls-best-practices-title">Best Practices</h2>
        <div className="ls-best-practices-grid">
          <div className="ls-dos-card">
            <h3 className="ls-card-header-do ">✓ Do</h3>
            <ul className="ls-dos-list">
              <li>
                Use for animations, lazy-loading, and visibility tracking.
              </li>
              <li>Attach ref to the exact element you want to observe.</li>
              <li>Define callbacks for enter and leave states.</li>
            </ul>
          </div>

          <div className="ls-donts-card">
            <h3 className="ls-card-header-dont">✗ Don’t</h3>
            <ul className="ls-donts-list">
              <li>Observe elements unnecessarily to save performance.</li>
              <li>
                Forget cleanup in complex scenarios (this hook handles it).
              </li>
              <li>Use it for non-visual triggers unrelated to viewport.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------- API REFERENCE ------------------- */}
      <div className="ls-api-section">
        <h2 className="ls-best-practices-title">API Reference</h2>
        <div className="ls-api-grid">
          <div className="ls-api-item">
            <span className="ls-api-method">ref</span>
            <p>
              A React ref object pointing to the DOM element you want to
              observe. Example: <code>const ref = useRef()</code>
            </p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">options</span>

            <p>Intersection Observer options object. Can include:</p>
            <ul>
              <li>
                <code>root</code>{" "}
              </li>
              <li>
                <code>rootMargin</code>{" "}
              </li>
              <li>
                <code>threshold</code>
              </li>
            </ul>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">callback</span>
            <p>
              Function called when the intersection state changes. Receives the
              IntersectionObserverEntry array. Example:{" "}
              <code>
                (entries) ={`{ console.log(entries[0].isIntersecting); }`}
              </code>
            </p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">isIntersecting</span>
            <p>
              Boolean value indicating whether the observed element is currently
              in view.
            </p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">unobserve()</span>
            <p>Function to manually stop observing the element.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
