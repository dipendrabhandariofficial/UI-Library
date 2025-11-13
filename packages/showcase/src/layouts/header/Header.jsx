import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Heart,
  GitBranchPlus,
  Sun,
  Moon,
  Search,
  PawPrint,
  MenuIcon,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Dropdown from "../../components/dropdown/Dropdown";
import { sidebarSections } from "../../data/sidebarSections";
import useClickOutside from "../../hooks/useClickOutside";

const Header = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const ref = useRef();

  useClickOutside(ref, () => setSearchQuery(""));

  // Flatten sidebar sections into one list for search
  const flatItems = useMemo(
    () =>
      sidebarSections.flatMap((section) =>
        section.items.map((item) => ({
          ...item,
          section: section.title,
        }))
      ),
    []
  );

  // Filter items by search query
  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return flatItems.filter((item) => item.label.toLowerCase().includes(q));
  }, [searchQuery, flatItems]);

  // Handle item selection (navigate or open external)
  const handleSelect = (item) => {
    setSearchQuery("");
    setShowResults(false);
    if (item.external) {
      window.open(item.link, "_blank");
    } else if (item.link) {
      navigate(item.link);
    }
  };

  const options = ["3.27.1", "3.26.0", "3.25.0"];

  // FOCUS ON SEARCH WHEN USER PRESSES CMD/CTRL + K
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check for Cmd+K (Mac) or Ctrl+K (Windows)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault(); // prevent browser search
        ref.current?.focus(); // focus the search input
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="header overflow-x-hidden relative">
      {/* Left side: logo + nav */}
      <div className="header-left">
        <button
          className="menu-btn"
          aria-label="Open menu"
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </button>

        <a href="/" className="logo">
          <div className="logo-icon">
            <PawPrint />
          </div>
          <span>Deeps</span>
        </a>

        <nav className="nav">
          <a href="#" className="nav-link">
            Docs
          </a>
          <a href="#showcase" className="nav-link">
            Showcase
          </a>
          <a href="#blog" className="nav-link">
            Blog
          </a>
          <a href="#guides" className="nav-link">
            Guides
          </a>
        </nav>
      </div>

      {/* Right side: search + actions */}
      <div className="header-actions z-50 relative">
        <a
          href="https://dipendrabhandari.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="sponsor-btn"
        >
          <Heart size={16} fill="#e53e3e" color="#e53e3e" />
          <span>Dipendra Bhandari</span>
        </a>

        <Dropdown
          options={options}
          placeholder="Version"
          onSelect={(value) => console.log("Selected:", value)}
          className="version-select"
          id="version-dropdown"
          width="120px"
        />

        {/*  Search Section */}
        <div className="search-box relative ">
          <Search size={16} />
          <input
            ref={ref}
            // onKeyDown=""
            type="text"
            placeholder="Search..."
            className="search-input "
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowResults(true);
            }}
            onBlur={() => setTimeout(() => setShowResults(false), 150)} // small delay before close
            onFocus={() => searchQuery && setShowResults(true)}
          />
          <span className="search-shortcut">⌘K</span>

          {/*  Search Results Dropdown */}
          {showResults && filteredItems.length > 0 && (
            <div className="search-dropdown">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  onKeyDown={onkeydown}
                  onMouseDown={() => handleSelect(item)}
                  className="search-item "
                >
                  <div className="search-item-left">
                    <div className="search-item-label">{item.label}</div>
                    <div className="search-item-section">{item.section}</div>
                  </div>

                  {item.external && (
                    <ExternalLink size={14} className="search-item-icon" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          className="icon-btn"
          onClick={() =>
            window.open("https://github.com/dipendrabhandariofficial", "_blank")
          }
        >
          <GitBranchPlus size={20} />
        </button>

        <button className="icon-btn themeicon" onClick={toggleDarkMode}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
