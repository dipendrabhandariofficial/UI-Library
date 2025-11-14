import React from "react";
import {ImageSlider} from"@dipendrabhandari/react-ui-library"
import ShowcaseContainer from "../ShowcaseContainer"
import "./ImageSliderShowcase.css";

export default function ImageSliderShowcase() {
  const images = [
    "https://picsum.photos/800/400?random=1",
    "https://picsum.photos/800/400?random=2",
    "https://picsum.photos/800/400?random=3",
  ];

  const usageCode = `
import ImageSlider from "./ImageSlider";

const images = [
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=2",
  "https://picsum.photos/800/400?random=3",
];

export default function Example() {
  return (
    <ImageSlider
      images={images}
      width="800px"
      height="400px"
      autoPlay={false}
      autoPlayInterval={5000}
      showIndicators={true}
      showArrows={true}
    />
  );
};
`;

  return (
    <div className="slider-showcase-container">
      <h2 className="slider-showcase-title">Image Slider Component</h2>
      <p className="slider-showcase-intro">
        The Image Slider component allows users to display multiple images in a carousel format.
        It supports autoplay, navigation arrows, and indicators, and can be fully customized with props.
      </p>

      <ShowcaseContainer title="Slider Demo" code={usageCode}>
        <ImageSlider
          images={images}
          width="650px"
          height="400px"
          autoPlay={false}
          autoPlayInterval={4000}
          showIndicators={true}
          showArrows={true}
        />
      </ShowcaseContainer>

      <div className="best-practices-section">
        <h2 className="best-practices-title">Best Practices</h2>
        <div className="best-practices-grid">
          <div className="dos-card">
            <h3 className="card-header-do">Do</h3>
            <ul className="dos-list">
              <li>Use clear, high-quality images for better user experience.</li>
              <li>Keep image sizes consistent to avoid layout shifts.</li>
              <li>Enable indicators for users to see multiple slides.</li>
              <li>Provide autoplay with a reasonable interval (3–5s).</li>
              <li>Support navigation arrows for manual control.</li>
            </ul>
          </div>

          <div className="donts-card">
            <h3 className="card-header-dont">Don't</h3>
            <ul className="donts-list">
              <li>Overload slider with too many images at once.</li>
              <li>Use extremely large images without compression.</li>
              <li>Hide important information inside slides without context.</li>
              <li>Make autoplay too fast; users won’t be able to see content.</li>
              <li>Forget responsive design for mobile screens.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
