import React, { useState } from "react";
import Slider from "../../../components/slider/Slider";
import ShowcaseContainer from "../ShowcaseContainer";
import "./Slidershowcase.css";

const SliderShowcase = () => {
  const [volume, setVolume] = useState(50);
  const [brightness, setBrightness] = useState(75);
  const [progress, setProgress] = useState(40);

  return (
    <div className="slider-showcase-container">
      {/* Header Section */}
      <div className="slider-showcase-header">
        <h1 className="slider-showcase-title">Slider Component</h1>
        <p className="slider-showcase-description">
          Sliders let users select a value from a range by moving a thumb along
          a track. They are useful for settings such as volume, brightness, or
          progress control.
        </p>
      </div>

      {/* Basic Usage */}
      {/* <ShowcaseContainer
        title="Basic Usage"
        description="A simple slider to select values from a range."
        code={`<Slider label="Volume" value={volume}
onChange={(e) => setVolume(e.target.value)} />`}
      >
        <div className="w-150">
          <Slider
            label="Blue"
            color="#3b82f6"
            trackColor="#dbeafe"
            value={brightness}
            onChange={(e) => setBrightness(e.target.value)}
          />
        </div>
      </ShowcaseContainer> */}

      <ShowcaseContainer
        title="Basic Usage"
        description="A simple slider to select values from a range."
        code={`<Slider  value={volume}
onChange={(e) => setVolume(e.target.value)} />`}
      >
        <div className="showcase-examples-test">
          <Slider
            // label="Volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
      </ShowcaseContainer>
      <ShowcaseContainer
        title="Color Customization"
        description="Change the color of the thumb and track using props."
        code={`<Slider color="#3b82f6" min="0" max="100" trackColor="#dbeafe" />\n<Slider color="#f59e0b" trackColor="#fef3c7" />\n<Slider color="#10b981" trackColor="#d1fae5" />`}
      >
        <div className="showcase-examples-test">
          <Slider
            label="Blue"
            color="#3b82f6"
            trackColor="#dbeafe"
            value={brightness}
            onChange={(e) => setBrightness(e.target.value)}
          />
          <Slider
            label="Amber"
            color="#f59e0b"
            trackColor="#fef3c7"
            value={60}
            onChange={() => {}}
          />
          <Slider
            label="Green"
            color="#10b981"
            trackColor="#d1fae5"
            value={80}
            onChange={() => {}}
          />
        </div>
      </ShowcaseContainer>

      {/* Sizes */}
      <ShowcaseContainer
        title="Sizes"
        description="Customize the height and thumb size of the slider for different contexts."
        code={`<Slider height="4px" thumbSize="12px" />\n<Slider height="8px" thumbSize="18px" />\n<Slider height="12px" thumbSize="24px" />`}
      >
        <div className="showcase-examples">
          <Slider
            label="Small"
            height="4px"
            thumbSize="12px"
            value={25}
            onChange={() => {}}
          />
          <Slider
            label="Medium"
            height="8px"
            thumbSize="18px"
            value={50}
            onChange={() => {}}
          />
          <Slider
            label="Large"
            height="12px"
            thumbSize="24px"
            value={75}
            onChange={() => {}}
          />
        </div>
      </ShowcaseContainer>

      {/* Disabled */}
      <ShowcaseContainer
        title="Disabled State"
        description="You can disable the slider to make it non-interactive."
        code={`<Slider disabled value={50} />`}
      >
        <div className="showcase-examples-test">
          <Slider label="Disabled" disabled value={50} onChange={() => {}} />
        </div>
      </ShowcaseContainer>

      {/* Best Practices */}
      <div className="best-practices-section">
        <h2 className="best-practices-title">Best Practices</h2>
        <div className="best-practices-grid">
          <div className="dos-card">
            <h3 className="card-header-do">Do</h3>
            <ul className="dos-list">
              <li>Use sliders for continuous value selection.</li>
              <li>Show current value for clarity.</li>
              <li>Keep track length consistent across forms.</li>
              <li>Use distinct colors for different semantics.</li>
            </ul>
          </div>

          <div className="donts-card">
            <h3 className="card-header-dont">Don't</h3>
            <ul className="donts-list">
              <li>Use sliders for discrete or categorical values.</li>
              <li>Make the thumb too small for touch users.</li>
              <li>Hide value without context.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderShowcase;
