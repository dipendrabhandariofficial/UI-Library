import React, { useState, useRef } from "react";
import styles from "./Accordion.module.css";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items?: AccordionItem[];
  allowMultipleOpen?: boolean;
  className?: string;
  itemClass?: string;
  transitionSpeed?: number;
  rounded?: boolean;
  border?: boolean;
}

export function Accordion({
  items = [],
  allowMultipleOpen = false,
  className = "",
  itemClass = "",
  transitionSpeed = 250, // ms
  rounded = true,
  border = true,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (allowMultipleOpen) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div
      className={`${styles.accordion} ${className} ${
        rounded ? styles.rounded : ""
      }`}
    >
      {items.map((item, index) => {
        const ref = useRef<HTMLDivElement>(null);
        const isOpen = openIndexes.includes(index);

        return (
          <div
            key={index}
            className={`${styles.accordionItem} ${
              border ? styles.withBorder : ""
            } ${itemClass}`}
          >
            <button
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(index)}
              style={{ transitionDuration: `${transitionSpeed}ms` }}
            >
              <span>{item.title}</span>
              <span
                className={`${styles.arrow} ${isOpen ? styles.open : ""}`}
                style={{ transitionDuration: `${transitionSpeed}ms` }}
              >
                ▶
              </span>
            </button>

            <div
              ref={ref}
              className={styles.accordionContent}
              style={{
                maxHeight: isOpen ? `${ref.current?.scrollHeight}px` : "0px",
                transitionDuration: `${transitionSpeed}ms`,
              }}
            >
              <div className={styles.contentInner}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Accordion;
