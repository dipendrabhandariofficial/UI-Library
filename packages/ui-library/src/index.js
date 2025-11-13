// UI Library Entry Point - Export all components and hooks

// ========== COMPONENTS ==========
// Accordion
export { default as Accordion } from './components/accordion/Accordion';

// Button
export { default as Button } from './components/button/Button';

// Dropdown
export { default as Dropdown } from './components/dropdown/Dropdown';

// Image Slider
export { default as ImageSlider } from './components/imageslider/ImageSlider';

// Slider
export { default as Slider } from './components/slider/Slider';

// Tabs
export { default as Tabs } from './components/tabs/Tabs';

// ========== HOOKS ==========
export { default as useClickOutside } from './hooks/useClickOutside';
export { default as useCopyToClipboard } from './hooks/useCopyToClipboard';
export { default as useFormValidation } from './hooks/useFormValidation';
export { default as useIntersectionObserver } from './hooks/useIntersectionObserver';
export { default as useLocalStorage } from './hooks/useLocalStorage';
export { default as useTheme } from './hooks/useTheme';
export { default as useToggle } from './hooks/useToggle';

// ========== DATA (if you want to export any utility data) ==========
// You can export data if needed
// export * from './data/yourDataFile';