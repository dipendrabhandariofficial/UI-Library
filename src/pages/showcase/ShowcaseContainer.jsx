import React, { useState } from "react";

const ShowcaseContainer = ({ title, children, code }) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-100vh mb-12px space-y-4 flex flex-col align-middle justify-center gap-3 ">
      {/* Title */}
      <h3 className="text-lg font-semibold align-middle  ">{title}</h3>
 
      {/* Tabs */}
      <div className="flex mb-4 gap-6  ">
        <button
          className={`px-4 py-2 font-medium transition-colors m-12 ${
            activeTab === "preview" ? "border-b-2 border-gray-800" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          className={`px-4 py-2 font-medium transition-colors w-fit dark:text-white ${
            activeTab === "code" ? "border-b-2 border-gray-800" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
      </div>

      {/* Content */}
      <div className="">
        {activeTab === "preview" ? (
          <div className="flex gap-2  m-12 h-auto pt-12 flex-wrap ">{children}</div>
        ) : (
          <div className="relative">
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 hover:bg-gray-600 text-gray-300 text-xs  rounded transition"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          <pre className="bg-gray-900 p-4! flex gap-2 flex-wrap align-middle rounded text-sm text-green-300 ">
              {code}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowcaseContainer;
