import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import './Sidebar.css';
import { useMemo } from 'react';

const Sidebar = ({ open, onClose}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sections = [
    {
      title: 'Get Started',
      items: [
        { id: 'overview', label: 'Overview', link: '/overview' },
        { id: 'installation', label: 'Installation' },
        { id: 'playground', label: 'Playground', external: true, link: 'https://playground.example.com' },
        { id: 'changelog', label: 'Changelog', external: true, link: 'https://changelog.example.com' }
      ]
    },
    {
      title: 'Components',
      items: [
        { id: 'button', label: 'Button', link: '/button' },
        { id: 'accordion', label: 'Accordion', link: '/accordion' },
        { id: 'slider', label: 'Slider', link: '/slider' },
        { id: 'dropdown', label: 'Dropdown', link: '/dropdown' },
        { id: 'tab', label: 'Tabs', link: '/tab' },
        { id: 'imageslider', label: 'ImageSlider', link: '/imageslider' },
      ]
    },
    {
      title: 'Hooks',
      items: [
        { id: 'localstorage', label: 'UseLocalStorage', link: '/uselocalstorage' },
        { id: 'theme', label: 'UseTheme', link: '/usetheme' },
        { id: 'toggle', label: 'UseToggle', link: '/usetoggle' },
        { id: 'clickoutside', label: 'useClickOutside', link: '/useclickoutside' },
        { id: 'useformvalidaton', label: 'useFormValidation', link: '/useformvalidaton' },
        { id: 'usecopytoclipboard', label: 'useCopyToClipboard', link: '/usecopytoclipboard' },
        { id: 'useintersectionobserver', label: 'useIntersectionObserver', link: '/useintersectionobserver' },
      ]
    },
    {
      title: 'AI for Agents',
      items: [
        { id: 'mcp-server', label: 'MCP Server', external: true, link: 'https://mui.com/material-ui/getting-started/mcp/' },
        { id: 'llms', label: 'LLMs.txt', external: true, link: 'https://mui.com/material-ui/llms.txt' }
      ]
    }
  ];

  const handleNavigation = (item) => {
    if (!item.external && item.link) {
      navigate(item.link);
      // if (onClose) onClose();
    }
  };

  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      {sections.map((section, idx) => (
        <div key={idx} className="sidebar-section">
          <h3 className="sidebar-title">{section.title}</h3>
          <ul className="sidebar-list">
            {section.items.map((item) => {
              const isActive = item.link && location.pathname === item.link;

              return (
                <li
                  key={item.id}
                  className={`sidebar-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavigation(item)}
                >
                  {item.external ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {item.external && <ExternalLink size={14} />}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;