export const sidebarSections = [
  {
    title: "Get Started",
    items: [
      { id: "overview", label: "Overview", link: "/overview" },
      { id: "installation", label: "Installation", link: "/installation" },
      {
        id: "playground",
        label: "Playground",
        external: true,
        link: "https://playground.example.com",
      },
      {
        id: "changelog",
        label: "Changelog",
        external: true,
        link: "https://changelog.example.com",
      },
    ],
  },
  {
    title: "Components",
    items: [
      { id: "button", label: "Button", link: "/button" },
      { id: "accordion", label: "Accordion", link: "/accordion" },
      { id: "slider", label: "Slider", link: "/slider" },
      { id: "dropdown", label: "Dropdown", link: "/dropdown" },
      { id: "tab", label: "Tabs", link: "/tab" },
      { id: "imageslider", label: "ImageSlider", link: "/imageslider" },
    ],
  },
  {
    title: "Hooks",
    items: [
      {
        id: "localstorage",
        label: "UseLocalStorage",
        link: "/uselocalstorage",
      },
      { id: "theme", label: "UseTheme", link: "/usetheme" },
      { id: "toggle", label: "UseToggle", link: "/usetoggle" },
      {
        id: "clickoutside",
        label: "useClickOutside",
        link: "/useclickoutside",
      },
      {
        id: "useformvalidaton",
        label: "useFormValidation",
        link: "/useformvalidaton",
      },
      {
        id: "usecopytoclipboard",
        label: "useCopyToClipboard",
        link: "/usecopytoclipboard",
      },
      {
        id: "useintersectionobserver",
        label: "useIntersectionObserver",
        link: "/useintersectionobserver",
      },
    ],
  },
  {
    title: "AI for Agents",
    items: [
      {
        id: "mcp-server",
        label: "MCP Server",
        external: true,
        link: "https://mui.com/material-ui/getting-started/mcp/",
      },
      {
        id: "llms",
        label: "LLMs.txt",
        external: true,
        link: "https://mui.com/material-ui/llms.txt",
      },
    ],
  },
];
