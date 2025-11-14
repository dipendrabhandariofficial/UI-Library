import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../components/tabs/Tabs";
import ShowcaseContainer from "../ShowcaseContainer";
import "../tabshowcase/Tabshowcase.css";

export default function TabShowcase() {
  const usageCode = `
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

export default function Example() {
  return (
   <Tabs defaultValue="tab1" onChange={(v) => console.log("Active Tab:", v)}>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>

          <TabsContent value="tab1">
            This is Tab 1 content. You can put any React components here.
          </TabsContent>
          <TabsContent value="tab2">
            This is Tab 2 content.
          </TabsContent>
          <TabsContent value="tab3">
            This is Tab 3 content.
          </TabsContent>
        </Tabs>
`;

  return (
    <div className="tab-showcase-container">
      <h2 className="tab-showcase-title">Tabs Component</h2>
      <p className="tab-showcase-intro">
        The Tabs component organizes related content into multiple sections, allowing users to
        switch between them seamlessly. It’s flexible, composable, and easy to customize with
        your design system.
      </p>

      <ShowcaseContainer title="Tabs Demo" code={usageCode}>
        <Tabs defaultValue="tab1" onChange={(v) => console.log("Active Tab:", v)}>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>

          <TabsContent value="tab1">
            This is Tab 1 content. You can put any React components here.
          </TabsContent>
          <TabsContent value="tab2">
            This is Tab 2 content.
          </TabsContent>
          <TabsContent value="tab3">
            This is Tab 3 content.
          </TabsContent>
        </Tabs>
      </ShowcaseContainer>

      <div className="best-practices-section">
        <h2 className="best-practices-title">Best Practices</h2>
        <div className="best-practices-grid">
          <div className="dos-card">
            <h3 className="card-header-do">Do</h3>
            <ul className="dos-list">
              <li>Keep tab labels short and clear.</li>
              <li>Use tabs for related content within the same context.</li>
              <li>Provide visual feedback for the active tab.</li>
              <li>Support keyboard navigation for accessibility.</li>
              <li>Maintain consistent spacing and colors.</li>
            </ul>
          </div>

          <div className="donts-card">
            <h3 className="card-header-dont">Don't</h3>
            <ul className="donts-list">
              <li>Overload tabs with too many items.</li>
              <li>Use tabs for unrelated content sections.</li>
              <li>Forget to handle focus and accessibility states.</li>
              <li>Hide critical information behind tabs.</li>
              <li>Use vague labels like “Tab 1”, “Tab 2”.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
