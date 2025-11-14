import React, { useState } from "react";
import ShowcaseContainer from "../../showcase/ShowcaseContainer"
import {useLocalStorage} from "@dipendrabhandari/react-ui-library"
import "./UseLocalStorageShowcase.css";
import { Button } from "@dipendrabhandari/react-ui-library"

export default function UseLocalStorageShowcase() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");


  // so any updates from this tab or other tabs will automatically refresh `user`
  const {
    value: user,
    setValue: setUser,
    addValue: addUserProp,
    removeItem: removeUser,
  } = useLocalStorage("demo-user", { name: "", email: "" });

  const saveUser = () => {
    if (!userName) return;
    setUser({ name: userName, email: userEmail });
    setUserName("");
    setUserEmail("");
  };

  const addEmailToUser = () => {
    if (!userEmail) return;
    addUserProp({ email: userEmail });
    setUserEmail("");
  };

  // ------------------- DEMO 2: Theme -------------------
  const { value: theme, setValue: setTheme } = useLocalStorage(
    "demo-theme",
    "light"
  );

  // Usage code strings for code display
  const usageCode1 = `import useLocalStorage from "./useLocalStorage";

function Example() {
  const { value: user, setValue, addValue, removeItem } = 
    useLocalStorage("user", { name: "", email: "" });

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => setValue({ name: "Dipendra", email: "dip@example.com" })}>
        Save User
      </button>
      <button onClick={() => addValue({ email: "new@example.com" })}>
        Add Email
      </button>
      <button onClick={removeItem}>Remove User</button>
    </div>
  );
}`;

  const usageCode2 = `import useLocalStorage from "./useLocalStorage";

function ThemeExample() {
  const { value: theme, setValue: setTheme } = useLocalStorage("theme", "light");

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("auto")}>Auto</button>
    </div>
  );
}`;

  // ------------------- RENDER -------------------
  return (
    <div className="ls-showcase-container">
      <h2 className="ls-showcase-title">useLocalStorage Hook</h2>

      <p className="ls-showcase-intro">
        The <code>useLocalStorage</code> hook uses{" "}
        <code>useSyncExternalStore</code> internally. It keeps your app state
        perfectly in sync with <code>localStorage</code> — even across tabs or
        browser windows. It also triggers updates in the same tab immediately
        using a custom <code>StorageEvent</code> dispatch.
      </p>

      {/* ---------- Showcase 1: User Object ---------- */}
      <ShowcaseContainer title="User Data (Object Sync)" code={usageCode1}>
        <div className="ls-demo">
          <div className="ls-demo-left">
            <div className="ls-input-group">
              <label className="ls-label">Name</label>
              <input
                className="ls-input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter name"
              />
            </div>
            <div className="ls-input-group">
              <label className="ls-label">Email</label>
              <input
                className="ls-input"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>

            <div className="ls-actions">
              <Button onClick={saveUser} colorScheme="blue">
                Save User (Replace)
              </Button>
              <Button onClick={addEmailToUser} colorScheme="green">
                Add Email (Merge)
              </Button>
              <Button onClick={removeUser} colorScheme="red">
                Remove User
              </Button>
            </div>
          </div>

          <div className="ls-demo-right">
            <h4 className="ls-section-title">Current User Data</h4>
            <pre className="ls-pre">{JSON.stringify(user, null, 2)}</pre>
          </div>
        </div>
      </ShowcaseContainer>

      {/* ---------- Showcase 2: Theme Preference ---------- */}
      <ShowcaseContainer title="Theme Preference (String Sync)" code={usageCode2}>
        <div className="ls-demo ls-demo-simple">
          <div className="ls-theme-selector">
            <label className="ls-label">Select Theme</label>
            <div className="ls-theme-buttons">
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
              <Button
                onClick={() => setTheme("auto")}
                colorScheme={theme === "auto" ? "blue" : "gray"}
              >
                Auto
              </Button>
            </div>
            <p className="ls-theme-display">
              Current theme: <strong>{theme}</strong>
            </p>
          </div>
        </div>
      </ShowcaseContainer>

      {/* ---------- Best Practices Section ---------- */}
      <div className="ls-best-practices-section">
        <h2 className="ls-best-practices-title">Best Practices</h2>
        <div className="ls-best-practices-grid">
          <div className="ls-dos-card">
            <h3 className="ls-card-header-do">✓ Do</h3>
            <ul className="ls-dos-list">
              <li>Store small, non-sensitive data (preferences, drafts)</li>
              <li>Provide default values via <code>initialValue</code></li>
              <li>Use <code>setValue</code> to replace, <code>addValue</code> to merge</li>
              <li>Expect cross-tab sync automatically</li>
            </ul>
          </div>

          <div className="ls-donts-card">
            <h3 className="ls-card-header-dont">✗ Don’t</h3>
            <ul className="ls-donts-list">
              <li>Store passwords or API tokens</li>
              <li>Use for large (5MB+) data</li>
              <li>Forget SSR or private-mode limitations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
