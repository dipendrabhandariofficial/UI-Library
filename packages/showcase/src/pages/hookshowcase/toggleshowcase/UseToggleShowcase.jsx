import React from "react";
import ShowcaseContainer from "../../showcase/ShowcaseContainer";
import { Button } from "../../../components/button/Button";
import useToggle from "../../../hooks/useToggle";
import "./UseToggleShowcase.css";

export default function UseToggleShowcase() {
  const usageCode1 = `import useToggle from "./useToggle";

function Example() {
  const { value, toggle } = useToggle(false);

  return (
    <div>
      <p>Light is {value ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}`;

  const usageCode2 = `import useToggle from "./useToggle";

function ModeSwitcher() {
  const { value: mode, toggle } = useToggle(["dark", "light"]);

  return (
    <div>
      <p>Current mode: {mode}</p>
      <button onClick={toggle}>Switch Mode</button>
    </div>
  );
}`;

  // Hook in action
  const lightToggle = useToggle(false);
  const modeToggle = useToggle(["dark", "light"]);

  return (
    <div className="toggle-showcase-container">
      <h2 className="toggle-showcase-title">useToggle Hook</h2>

      <p className="toggle-showcase-intro">
        <code>useToggle</code> is a lightweight hook that lets you flip between
        two states — like <code>true/false</code>, <code>open/close</code>, or
        even custom values such as <code>"light/dark"</code>. It’s great for
        modals, dropdowns, or toggling UI states.
      </p>

      {/* Showcase 1 */}
      <ShowcaseContainer title="Usage 1: Basic Boolean Toggle" code={usageCode1}>
        <div className="toggle-demo">
          <p className="toggle-status">
            Light is:{" "}
            <strong style={{ color: lightToggle.value ? "#16a34a" : "#dc2626" }}>
              {lightToggle.value ? "ON" : "OFF"}
            </strong>
          </p>
          <Button onClick={lightToggle.toggle} colorScheme="blue">
            Toggle Light
          </Button>
        </div>
      </ShowcaseContainer>

      {/* Showcase 2 */}
      <ShowcaseContainer title="Usage 2: Custom Value Toggle" code={usageCode2}>
        <div className="toggle-demo">
          <p className="toggle-status">
            Current Mode:{" "}
            <strong>{modeToggle.value}</strong>
          </p>
          <Button onClick={modeToggle.toggle} colorScheme="purple">
            Switch Mode
          </Button>
        </div>
      </ShowcaseContainer>

      {/*  Best Practices */}
      <div className="ls-best-practices-section">
        <h2 className="ls-best-practices-title">Best Practices</h2>
        <div className="ls-best-practices-grid">
          <div className="ls-dos-card">
            <h3 className="ls-card-header-do">✓ Do</h3>
            <ul className="ls-dos-list">
              <li>Use for simple binary or two-value toggles</li>
              <li>Combine with UI states like modals, accordions, or dark mode</li>
              <li>Pass custom values like ["open", "closed"] for readable states</li>
              <li>Keep it stateless and predictable — no side effects inside</li>
            </ul>
          </div>

          <div className="ls-donts-card">
            <h3 className="ls-card-header-dont">✗ Don’t</h3>
            <ul className="ls-donts-list">
              <li>Use it for complex logic — use useReducer instead</li>
              <li>Store sensitive or large data in it (use useState or context)</li>
              <li>Rely on it for derived state — compute outside the hook</li>
            </ul>
          </div>
        </div>
      </div>

      {/*  API Section */}
      <div className="ls-api-section">
        <h2 className="ls-best-practices-title">API Reference</h2>
        <div className="ls-api-grid">
          <div className="ls-api-item">
            <span className="ls-api-method">value</span>
            <p>The current toggle state.</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">toggle()</span>
            <p>Switches between the two states.</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">setValue()</span>
            <p>Manually set the toggle value.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
