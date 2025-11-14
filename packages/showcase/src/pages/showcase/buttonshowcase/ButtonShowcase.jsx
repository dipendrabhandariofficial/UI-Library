import React from "react";
import { Button } from "@dipendrabhandari/react-ui-library"
import ShowcaseContainer from "../ShowcaseContainer"
import { FaPlus, FaArrowRight, FaStar, FaDownload, FaHeart } from "react-icons/fa";
import "./ButtonShowcase.css";

const ButtonShowcase = () => {
  return (
    <div className="button-showcase-container">
      {/* Header Section */}
      <div className="button-showcase-header">
        <h1 className="button-showcase-title">
          Button Component
        </h1>
        <p className="button-showcase-description">
          Buttons allow users to take actions and make choices with a single tap. 
          They come in various styles, sizes, and states to fit different use cases.
        </p>
      </div>

     
      <ShowcaseContainer
        title="Basic Usage"
        
        description="Simple button examples with different color schemes"
        code={`<Button colorScheme="blue">Primary Action</Button>\n<Button colorScheme="gray">Secondary Action</Button>\n<Button colorScheme="red">Destructive Action</Button>`}
      >
        <div className="showcase-examples-basic">
          <Button colorScheme="blue">Primary Action</Button>
          <Button colorScheme="gray">Secondary Action</Button>
          <Button colorScheme="red">Destructive Action</Button>
        </div>
      </ShowcaseContainer> 

      {/* Variants */}
      <ShowcaseContainer
        title="Button Variants"
        description="Choose from different visual styles for various contexts"
        code={`<Button variant="solid" colorScheme="blue">Solid</Button>\n<Button variant="outline" colorScheme="blue">Outline</Button>\n<Button variant="ghost" colorScheme="blue">Ghost</Button>\n<Button variant="link" colorScheme="blue">Link</Button>`}
      >
        <div className="showcase-examples">
          <Button variant="solid" colorScheme="blue">Solid</Button>
          <Button variant="outline" colorScheme="blue">Outline</Button>
          <Button variant="ghost" colorScheme="blue">Ghost</Button>
          <Button variant="link" colorScheme="blue">Link</Button>
        </div>
      </ShowcaseContainer>

      {/* Color Schemes */}
      <ShowcaseContainer
        title="Color Schemes"
        description="Available color schemes for different semantic meanings"
        code={`<Button colorScheme="blue">Blue</Button>\n<Button colorScheme="green">Green</Button>\n<Button colorScheme="red">Red</Button>\n<Button colorScheme="yellow">Yellow</Button>\n<Button colorScheme="purple">Purple</Button>\n<Button colorScheme="gray">Gray</Button>`}
      >
        <div className="showcase-examples">
          <Button colorScheme="blue">Blue</Button>
          <Button colorScheme="green">Green</Button>
          <Button colorScheme="red">Red</Button>
          <Button colorScheme="yellow">Yellow</Button>
          <Button colorScheme="purple">Purple</Button>
          <Button colorScheme="gray">Gray</Button>
        </div>
      </ShowcaseContainer>

      {/* Sizes */}
      <ShowcaseContainer
        title="Button Sizes"
        description="Different sizes for various contexts and hierarchies"
        code={`<Button size="xs">Extra Small</Button>\n<Button size="sm">Small</Button>\n<Button size="md">Medium</Button>\n<Button size="lg">Large</Button>`}
      >
        <div className="showcase-examples">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </ShowcaseContainer>

      {/* With Icons */}
      <ShowcaseContainer
        title="Buttons with Icons"
        description="Add icons to enhance visual communication"
        code={`import { FaPlus, FaArrowRight, FaStar, FaDownload } from 'react-icons/fa';\n\n<Button leftIcon={<FaPlus />}>Add Item</Button>\n<Button rightIcon={<FaArrowRight />}>Continue</Button>\n<Button leftIcon={<FaStar />} variant="outline">Favorite</Button>\n<Button leftIcon={<FaDownload />} colorScheme="green">Download</Button>`}
      >
        <div className="showcase-examples">
          <Button leftIcon={<FaPlus />}>Add Item</Button>
          <Button rightIcon={<FaArrowRight />}>Continue</Button>
          <Button leftIcon={<FaStar />} variant="outline">Favorite</Button>
          <Button leftIcon={<FaDownload />} colorScheme="green">Download</Button>
        </div>
      </ShowcaseContainer>

      {/* Icon Only */}
      <ShowcaseContainer
        title="Icon Buttons"
        description="Icon-only buttons for compact interfaces"
        code={`<Button leftIcon={<FaHeart />} aria-label="Like" />\n<Button leftIcon={<FaPlus />} aria-label="Add" />\n<Button leftIcon={<FaDownload />} aria-label="Download" />`}
      >
        <div className="showcase-examples">
          <Button leftIcon={<FaHeart />} aria-label="Like" />
          <Button leftIcon={<FaPlus />} aria-label="Add" />
          <Button leftIcon={<FaDownload />} aria-label="Download" />
        </div>
      </ShowcaseContainer>

      {/* States */}
      <ShowcaseContainer
        title="Button States"
        description="Different states to provide user feedback"
        code={`<Button isLoading>Loading</Button>\n<Button disabled>Disabled</Button>\n<Button colorScheme="blue">Normal</Button>`}
      >
        <div className="showcase-examples">
          <Button isLoading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button colorScheme="blue">Normal</Button>
        </div>
      </ShowcaseContainer>

      {/* Best Practices */}
      <div className="best-practices-section">
        <h2 className="best-practices-title">Best Practices</h2>
        <div className="best-practices-grid">
          <div className="dos-card">
            <h3 className="card-header-do">Do</h3>
            <ul className="dos-list">
              <li>Use primary buttons for main actions</li>
              <li>Keep button labels clear and actionable</li>
              <li>Use appropriate color schemes for actions</li>
              <li>Provide loading states for async actions</li>
              <li>Ensure sufficient contrast ratios</li>
            </ul>
          </div>
          
          <div className="donts-card">
            <h3 className="card-header-dont">Don't</h3>
            <ul className="donts-list">
              <li>Use multiple primary buttons together</li>
              <li>Make buttons too small for touch devices</li>
              <li>Use red color for positive actions</li>
              <li>Forget disabled states for unavailable actions</li>
              <li>Overuse ghost and link variants</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ButtonShowcase;