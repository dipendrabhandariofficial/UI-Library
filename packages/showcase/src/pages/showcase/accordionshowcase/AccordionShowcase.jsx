import React, { useState } from "react";
import {Accordion} from '@dipendrabhandari/react-ui-library'
import ShowcaseContainer from "../ShowcaseContainer"
import "./AccordionShowcase.css";

export default function AccordionShowcase() {
  const accordionItems = [
    {
      title: "What is Accordion?",
      content:
        "Accordion is a UI pattern that allows users to toggle the visibility of content sections. It's useful for saving space and organizing information."
    },
    {
      title: "Can I open multiple items?",
      content:
        "Yes! By setting allowMultipleOpen={true}, multiple accordion items can be expanded simultaneously."
    },
    {
      title: "Is it customizable?",
      content:
        "Absolutely! You can adjust props like border, rounded corners, and transition speed to match your design system."
    },
  ];

  const usageCode = `
import Accordion from "./Accordion";

const items = [
  { title: "What is Accordion?", content: "Accordion is a
    UI pattern that allows users to toggle content." },
  { title: "Can I open multiple?", content: "Yes,
    set allowMultipleOpen={true}." },
  { title: "Is it customizable?", content: "Yes, 
   adjust border, rounded, and transitionSpeed props." },
];

export default function Example() {
  return (
    <Accordion
      items={items}
      allowMultipleOpen={false}
      transitionSpeed={250}
      rounded
      border
    />
  );
};
`;

  return (
    <div className="accordion-showcase-container">
      <h2 className="showcase-title">Accordion Component</h2>

      {/* Introduction */}
      <p className="showcase-intro">
        The Accordion component is a versatile UI pattern that allows content sections to expand and collapse.
        It helps keep your interface clean, organized, and easy to navigate.
      </p>

      <ShowcaseContainer title="Accordion Demo" code={usageCode}>
        <Accordion items={accordionItems} allowMultipleOpen={true} />
      </ShowcaseContainer>

      {/* Do's & Don'ts */}
   <div className="best-practices-section">
  <h2 className="best-practices-title">Best Practices</h2>
  <div className="best-practices-grid">
    <div className="dos-card">
      <h3 className="card-header-do">Do</h3>
      <ul className="dos-list">
        <li>Use accordions to organize large sets of related information</li>
        <li>Provide clear and concise titles for each section</li>
        <li>Keep the content inside short and easy to scan</li>
        <li>Indicate open and closed states with icons or animations</li>
        <li>Allow multiple sections to open if the content requires comparison</li>
      </ul>
    </div>

    <div className="donts-card">
      <h3 className="card-header-dont">Don't</h3>
      <ul className="donts-list">
        <li>Overload each accordion panel with too much text or media</li>
        <li>Use accordions for critical content that should always be visible</li>
        <li>Hide essential navigation or actions inside accordions</li>
        <li>Make accordion headers look like normal text, keep them clickable</li>
        <li>Use too many nested accordions; it complicates the layout</li>
      </ul>
    </div>
  </div>
</div>

     
    </div>
  );
}
