import React, { createContext, useContext, useState, ReactNode } from "react";
import "./Tabs.css";

// --- Types ---
interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  onChange?: (value: string) => void;
  className?: string;
}

interface TabsContextType {
  activeTab: string;
  handleChange: (value: string) => void;
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

// --- Context ---
const TabsContext = createContext<TabsContextType | undefined>(undefined);

// --- Tabs Component ---
export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  children,
  onChange,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleChange = (value: string) => {
    setActiveTab(value);
    onChange?.(value);
  };

  return (
    <TabsContext.Provider value={{ activeTab, handleChange }}>
      <div className={`tabs ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
};

// --- TabsList ---
export const TabsList: React.FC<TabsListProps> = ({
  children,
  className = "",
}) => {
  return <div className={`tabs-list ${className}`}>{children}</div>;
};

// --- TabsTrigger ---
export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  className = "",
}) => {
  const context = useContext(TabsContext);
  if (!context)
    throw new Error("TabsTrigger must be used within a Tabs component");

  const { activeTab, handleChange } = context;
  const isActive = activeTab === value;

  return (
    <button
      className={`tab-trigger ${isActive ? "active" : ""} ${className}`}
      onClick={() => handleChange(value)}
    >
      {children}
    </button>
  );
};

// --- TabsContent ---
export const TabsContent: React.FC<TabsContentProps> = ({
  value,
  children,
  className = "",
}) => {
  const context = useContext(TabsContext);
  if (!context)
    throw new Error("TabsContent must be used within a Tabs component");

  const { activeTab } = context;

  if (activeTab !== value) return null;

  return <div className={`tab-content ${className}`}>{children}</div>;
};
