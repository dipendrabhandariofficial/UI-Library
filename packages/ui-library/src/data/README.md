# @dipendrabhandari/react-ui-library

A collection of beautiful, reusable React components and custom hooks for building modern web applications.

## 📦 Installation

```bash
npm install @dipendrabhandari/react-ui-library
```

## 🚀 Components

### Accordion
Expandable content sections.

```jsx
import { Accordion } from '@dipendrabhandari/react-ui-library';

<Accordion items={[
  { title: 'Section 1', content: 'Content 1' },
  { title: 'Section 2', content: 'Content 2' }
]} />
```

### Button
Customizable button component.

```jsx
import { Button } from '@dipendrabhandari/react-ui-library';

<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>
```

### Dropdown
Dropdown menu component.

```jsx
import { Dropdown } from '@dipendrabhandari/react-ui-library';

<Dropdown 
  options={['Option 1', 'Option 2', 'Option 3']}
  onSelect={handleSelect}
/>
```

### ImageSlider
Image carousel/slider component.

```jsx
import { ImageSlider } from '@dipendrabhandari/react-ui-library';

<ImageSlider images={[
  { src: '/img1.jpg', alt: 'Image 1' },
  { src: '/img2.jpg', alt: 'Image 2' }
]} />
```

### Slider
Range slider component.

```jsx
import { Slider } from '@dipendrabhandari/react-ui-library';

<Slider 
  min={0} 
  max={100} 
  value={value} 
  onChange={setValue}
/>
```

### Tabs
Tabbed interface component.

```jsx
import { Tabs } from '@dipendrabhandari/react-ui-library';

<Tabs tabs={[
  { label: 'Tab 1', content: <div>Content 1</div> },
  { label: 'Tab 2', content: <div>Content 2</div> }
]} />
```

## 🪝 Custom Hooks

### useClickOutside
Detect clicks outside a specific element.

```jsx
import { useClickOutside } from '@dipendrabhandari/react-ui-library';

const ref = useRef();
useClickOutside(ref, () => {
  console.log('Clicked outside!');
});
```

### useCopyToClipboard
Copy text to clipboard with status feedback.

```jsx
import { useCopyToClipboard } from '@dipendrabhandari/react-ui-library';

const [copiedText, copy] = useCopyToClipboard();
copy('Text to copy');
```

### useFormValidation
Form validation hook.

```jsx
import { useFormValidation } from '@dipendrabhandari/react-ui-library';

const { values, errors, handleChange, handleSubmit } = useFormValidation(
  initialValues,
  validationRules
);
```

### useIntersectionObserver
Observe element visibility in viewport.

```jsx
import { useIntersectionObserver } from '@dipendrabhandari/react-ui-library';

const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
```

### useLocalStorage
Persist state in localStorage.

```jsx
import { useLocalStorage } from '@dipendrabhandari/react-ui-library';

const [value, setValue] = useLocalStorage('key', 'defaultValue');
```

### useTheme
Theme management hook.

```jsx
import { useTheme } from '@dipendrabhandari/react-ui-library';

const { theme, toggleTheme } = useTheme();
```

### useToggle
Boolean state toggle hook.

```jsx
import { useToggle } from '@dipendrabhandari/react-ui-library';

const [isOpen, toggle] = useToggle(false);
```

## 📖 Documentation

For full documentation and live examples, visit the [showcase website](https://dipendra-ui-library.vercel.app/overview).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © Dipendra Bhandari

## 🔗 Links

- [GitHub Repository](https://github.com/dipendrabhandariofficial/UI-Library)
- [npm Package](https://www.npmjs.com/package/@dipendrabhandari/react-ui-library)
- [Report Issues](https://github.com/dipendrabhandariofficial/UI-Library/issues)

## 👨‍💻 Author

**Dipendra Bhandari**
- Email: dipendrabhandari0000@gmail.com
- GitHub: [@dipendrabhandariofficial](https://github.com/dipendrabhandariofficial)