import React, { useRef, useState } from "react";
import Accordion from "../../../components/accordion/Accordion"
import useClickOutside from "../../../hooks/useClickOutside"
import ShowcaseContainer from "../../showcase/ShowcaseContainer"
import "../clickoutsideshowcase/Clickoutsideshowcase.css";

export default function ClickOutsideShowcase() {
  const accordionRef = useRef(null);
  const [resetKey, setResetKey] = useState(0);
  const [closed, setClosed] = useState(false);

   const usageCode = `
import { useRef } from "react";
import useClickOutside from "./useClickOutside";
import Accordion from "./Accordion";

export default function Example() {
  const ref = useRef();

  useClickOutside(ref, () => alert("Clicked outside!"));

  const accordionItems = [
    { title: "Item 1", content: "Content 1" },
    { title: "Item 2", content: "Content 2" }
  ];

  return (
    <div ref={ref}>
      <Accordion items={accordionItems} allowMultipleOpen />
    </div>
  );
}
`;

  const accordionItems = [
    {
      title: "What is Accordion?",
      content:
        "Accordion is a UI pattern that allows users to toggle the visibility of content sections. It's useful for saving space and organizing information.",
    },
    {
      title: "Can I open multiple items?",
      content:
        "Yes! By setting allowMultipleOpen={true}, multiple accordion items can be expanded simultaneously.",
    },
    {
      title: "Is it customizable?",
      content:
        "Absolutely! You can adjust props like border, rounded corners, and transition speed to match your design system.",
    },
  ];

  // Close accordion when clicked outside
  useClickOutside(accordionRef, () => {
    setResetKey((prev) => prev + 1);
    setClosed(true);
    setTimeout(() => setClosed(false), 3500);
  });

  return (
    <div className="clickoutside-showcase-container">
      <h2 className="clickoutside-showcase-title">useClickOutside Hook</h2>

      <p className="clickoutside-showcase-intro">
        <code>useClickOutside</code> detects clicks outside a referenced element
        and runs a callback — useful for closing modals, dropdowns, or
        accordions when a user clicks elsewhere.
      </p>

      <ShowcaseContainer title="Hook Demo" code={usageCode}>
        <div ref={accordionRef} className="clickoutside-demo-box">
          <Accordion
            key={resetKey}
            items={accordionItems}
            allowMultipleOpen={true}
            border
            rounded
          />
        </div>

      </ShowcaseContainer>

      {/* ------------------- DO / DON'T SECTION ------------------- */}
<section className="ls-best-practices-section">
  <h2 className="ls-best-practices-title">Best Practices</h2>
  <div className="ls-best-practices-grid">
    <div className="ls-dos-card">
      <h3 className="ls-card-header-do">✅ Do</h3>
      <ul className="ls-dos-list">
        <li>Use for modals, dropdowns, and accordions.</li>
        <li>Attach ref to a single, top-level wrapper element.</li>
        <li>Always define cleanup — this hook does it automatically.</li>
      </ul>
    </div>

    <div className="ls-donts-card">
      <h3 className="ls-card-header-dont">❌ Don’t</h3>
      <ul className="ls-donts-list">
        <li>Attach multiple refs to the same component.</li>
        <li>Use for actions unrelated to mouse clicks.</li>
        <li>Forget to wrap your target element with the ref.</li>
      </ul>
    </div>
  </div>
</section>

{/* ------------------- API REFERENCE ------------------- */}
<section className="ls-api-section">
  <h2 className="ls-api-title">API Reference</h2>
  <div className="ls-api-item">
    <p>
      <code>useClickOutside(ref, handler)</code>
    </p>
    <ul>
      <li>
        <strong>ref:</strong> React ref object attached to the target element.
      </li>
      <li>
        <strong>handler:</strong> Function to execute when a click happens outside the ref element.
      </li>
    </ul>

    <pre className="ls-pre">
{`const ref = useRef();
useClickOutside(ref, () => console.log("Clicked outside!"));`}
    </pre>
  </div>
</section>
    </div>
    );
}
