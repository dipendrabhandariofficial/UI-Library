import React from "react";
import ShowcaseContainer from "../../showcase/ShowcaseContainer"
import { Button } from "@dipendrabhandari/react-ui-library"
import {useTheme} from "@dipendrabhandari/react-ui-library"
import "./UseThemeShowcase.css";

export default function UseThemeShowcase() {
  const usageCode1 = `import useTheme from "./useTheme";

function Example() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}`;

  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <div className="theme-showcase-container">
      <h2 className="theme-showcase-title">useTheme Hook</h2>

      <p className="theme-showcase-intro">
        The <code>useTheme</code> hook provides a simple way to manage light, dark,
        and system themes in React. It uses <code>localStorage</code> for persistence
        and automatically applies the right CSS class (<code>.light</code> or{" "}
        <code>.dark</code>) to your document.
      </p>

      {/* Showcase 1 */}
      <ShowcaseContainer title="Usage 1: Toggle Theme" code={usageCode1}>
        <div className="theme-demo">
          <p className="theme-status">
            Current Theme: <strong>{theme}</strong>
          </p>
          <Button onClick={toggleTheme} colorScheme="blue">
            Toggle Theme
          </Button>
        </div>
      </ShowcaseContainer>

        <div className="theme-demo">
          <div className="theme-buttons">
            <Button
              onClick={() => setTheme("light")}
              
              colorScheme={theme === "light" ? "blue" : "gray"}
            >
              Light
            </Button>
            <Button
              onClick={() => setTheme("dark")}
              colorScheme={theme === "dark" ? "blue" : "gray"}
            >
              Dark
            </Button>
          </div>
        </div>

    
      <div className="ls-best-practices-section">
        <h2 className="ls-best-practices-title">Best Practices</h2>
        <div className="ls-best-practices-grid">
          <div className="ls-dos-card">
            <h3 className="ls-card-header-do">✓ Do</h3>
            <ul className="ls-dos-list">
              <li>Use <code>auto</code> mode to match system preferences.</li>
              <li>Store theme choice using <code>localStorage</code> for persistence.</li>
              <li>Apply <code>.dark</code> or <code>.light</code> class at root level (HTML).</li>
              <li>Provide a toggle or selector in the UI for accessibility.</li>
              <li>Use smooth transitions for background and text color changes.</li>
              <li>Ensure sufficient color contrast between light and dark themes.</li>
            </ul>
          </div>

          <div className="ls-donts-card">
            <h3 className="ls-card-header-dont">✗ Don't</h3>
            <ul className="ls-donts-list">
              <li>Hardcode color values inline; use theme-based CSS variables instead.</li>
              <li>Forget to persist the selected theme; users expect it to stay.</li>
              <li>Toggle themes by re-rendering the whole app — just swap classes.</li>
              <li>Ignore system theme — respect user preferences where possible.</li>
              <li>Apply conflicting theme classes to nested elements.</li>
              <li>Forget to test your dark mode on real devices and browsers.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
