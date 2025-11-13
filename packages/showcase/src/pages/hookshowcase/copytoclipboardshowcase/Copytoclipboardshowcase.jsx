import React from "react";
import ShowcaseContainer from "../../showcase/ShowcaseContainer";
import { Button } from "../../../components/button/Button";
import useCopyToClipboard from "../../../hooks/useCopyToClipboard";
import "./UseCopyToClipboardShowcase.css";
import { Copy, ClipboardCheck } from "lucide-react";

export default function UseCopyToClipboardShowcase() {
  const usageCode1 = `import useCopyToClipboard from "./useCopyToClipboard";

function Example() {
  const { copied, handleCopy } = useCopyToClipboard();
  const text = "Hello World!";

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => handleCopy(text)}>
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}`;

  const { copied, handleCopy } = useCopyToClipboard();
  const sampleText = "This is Copy to Clipboard";

  return (
    <div className="copy-showcase-container">
      <h2 className="copy-showcase-title">useCopyToClipboard Hook</h2>

      <p className="copy-showcase-intro">
        The <code>useCopyToClipboard</code> hook makes it simple to copy text to
        the clipboard in your React app. It handles success states and provides
        visual feedback, making it perfect for copy buttons, share links, and
        code snippets.
      </p>

      <ShowcaseContainer title="Usage 1: Copy Text" code={usageCode1}>
        <div className="copy-demo">
          <p className="copy-text">
            {sampleText}
          </p>
         <Button
        onClick={() => handleCopy(sampleText)}
        className={`flex items-center gap-2 px-4 py-2 rounded-md text-white transition-colors duration-200 ${
          copied ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
        }`}
        leftIcon={copied ? <ClipboardCheck size={18} /> : <Copy size={18} />}
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
        </div>
      </ShowcaseContainer>

      {/* Best Practices Section */}
      <div className="ls-best-practices-section">
        <h2 className="ls-best-practices-title">Best Practices</h2>
        <div className="ls-best-practices-grid">
          <div className="ls-dos-card">
            <h3 className="ls-card-header-do">✓ Do</h3>
            <ul className="ls-dos-list">
              <li>Always show visual feedback (e.g., “Copied!”) to users.</li>
              <li>Use <code>setTimeout</code> to reset the copied state after a short delay.</li>
              <li>Wrap this hook in buttons, links, or icons for a clean UX.</li>
              <li>Ensure text is correctly passed to <code>writeText()</code>.</li>
              <li>Use descriptive tooltips like “Copy Link” or “Copy Email”.</li>
            </ul>
          </div>

          <div className="ls-donts-card">
            <h3 className="ls-card-header-dont">✗ Don't</h3>
            <ul className="ls-donts-list">
              <li>Forget to include the text parameter in <code>writeText()</code>.</li>
              <li>Copy sensitive information without user consent.</li>
              <li>Use <code>alert()</code> for copy confirmation use smooth UI feedback instead.</li>
              <li>Overuse this feature for trivial actions (keep UX clean).</li>
              <li>Rely solely on clipboard API without error handling.</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* 🔹 API Reference Section */}
      <div className="ls-api-section">
        <h2 className="ls-best-practices-title">API Reference</h2>
        <div className="ls-api-grid">
          <div className="ls-api-item">
            <span className="ls-api-method">copied</span>
            <p>
               indicates whether the text has been successfully
              copied to the clipboard.
            </p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">handleCopy(text)</span>
            <p>
              Copies the provided <code>text</code> to the clipboard and sets{" "}
              <code>copied</code> to <code>true</code> temporarily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
