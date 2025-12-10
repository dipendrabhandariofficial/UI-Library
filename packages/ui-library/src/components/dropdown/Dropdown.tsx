import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";

interface DropdownProps {
  label?: string;
  options?: string[];
  onSelect?: (option: string) => void;
  placeholder?: string;
  width?: string;
  defaultValue?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options = [],
  onSelect,
  placeholder = "Select an option",
  width = "200px",
  defaultValue = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown-wrapper" style={{ width }} ref={dropdownRef}>
      {label && <label className="dropdown-label">{label}</label>}

      <div
        className={`dropdown-selected ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected || placeholder}</span>

        <svg
          className={`dropdown-icon ${isOpen ? "rotate" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.length > 0 ? (
            options.map((option, index) => (
              <li
                key={index}
                className={`dropdown-item ${
                  selected === option ? "active" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))
          ) : (
            <li className="dropdown-empty">No options available</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
