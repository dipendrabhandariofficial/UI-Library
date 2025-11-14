// Library entry point - exports all components and hooks

// Components with simple default exports
export { default as Accordion } from './components/accordion/Accordion';
export { default as Button } from './components/button/Button';
export { default as Dropdown } from './components/dropdown/Dropdown';
export { default as ImageSlider } from './components/imageslider/ImageSlider';
export { default as Slider } from './components/slider/Slider';

// Tabs - has both default and named exports
export { default as Tabs, TabsList, TabsTrigger, TabsContent } from './components/tabs/Tabs';

// Hooks
export { default as useClickOutside } from './hooks/useClickOutside';
export { default as useCopyToClipboard } from './hooks/useCopyToClipboard';
export { default as useFormValidation } from './hooks/useFormValidation';
export { default as useIntersectionObserver } from './hooks/useIntersectionObserver';
export { default as useLocalStorage } from './hooks/useLocalStorage';
export { default as useTheme } from './hooks/useTheme';
export { default as useToggle } from './hooks/useToggle';