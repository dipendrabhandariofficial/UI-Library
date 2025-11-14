import React from "react";
import Dropdown from "../../../components/dropdown/Dropdown";
import ShowcaseContainer from "../ShowcaseContainer";
import "../dropdownshowcase/Dropdownshowcase.css";

export default function Dropdownshowcase() {
  const options = ["React", "Vue", "Angular", "Svelte"];

  const usageCode = `
import Dropdown from "./Dropdown";

export default function Example() {
  const options = ["React", "Vue", "Angular", "Svelte"];

  return (
    <Dropdown
      label="Select Framework"
      options={options}
      placeholder="Choose one"
      onSelect={(value) => console.log("Selected:", value)}
      width="240px"
    />
  );
};
`;

  return (
    <div className="dropdown-showcase-container">

      <h2 className="dropdown-showcase-title">Dropdown Component</h2>

      <p className="dropdown-showcase-intro">
        The Dropdown component allows users to select one option from a list.
        It’s flexible, reusable, and can adapt to different data and design needs.
        Ideal for forms, filters, and selection menus.
      </p>

      <ShowcaseContainer title="Dropdown Demo" code={usageCode}>
        <Dropdown
          label="Select Framework"
          options={options}
          placeholder="Choose one"
          onSelect={(value) => console.log("Selected:", value)}
          width="240px"
        />
      </ShowcaseContainer>


      <div className="best-practices-section">
        <h2 className="best-practices-title">Best Practices</h2>
        <div className="best-practices-grid">
          <div className="dos-card">
            <h3 className="card-header-do">Do</h3>
            <ul className="dos-list">
              <li>Use dropdowns for short, easily scannable option lists.</li>
              <li>Provide a clear label or placeholder to indicate purpose.</li>
              <li>Ensure keyboard accessibility and focus states.</li>
              <li>Keep option names short and distinct.</li>
              <li>Use consistent width and spacing across dropdowns.</li>
            </ul>
          </div>

          <div className="donts-card">
            <h3 className="card-header-dont">Don't</h3>
            <ul className="donts-list">
              <li>Use dropdowns for very long lists; consider a search input instead.</li>
              <li>Hide essential actions or navigation items inside dropdowns.</li>
              <li>Overload dropdowns with too many nested levels.</li>
              <li>Forget to handle edge cases like empty or disabled states.</li>
              <li>Use vague labels like “Select” without context.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
