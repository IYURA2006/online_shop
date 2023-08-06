import React, { useState } from 'react';
import './BurgerMenu.css'; // Import the SCSS file for styling


const menuData = [
  {
    id: 1,
    title: 'Home',
    subcategories: [

    ],
  },
  {
    id: 2,
    title: 'Promotion',
    subcategories: [
     
    ],
  },
  {
    id: 3,
    title: 'Shop',
    subcategories: [
      { id: 11, title: 'Electronic', subcategories: [] },
      { id: 12, title: 'Clothes', subcategories: ["Gentelmen's"," Lady's"] },
      { id: 13, title: 'Gaming', subcategories: [ ] },
      { id: 14, title: 'Accessories', subcategories: [] },
      { id: 15, title: 'Hobbies', subcategories: [] },
    ],
  },
  {
    id: 4,
    title: 'Contact us',
    subcategories: [
    
    ],
  },

];
const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="burger-line" />
        <div className="burger-line" />
        <div className="burger-line" />
      </div>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        {menuData.map((section) => (
          <li key={section.id}>
            {section.title}
            {section.subcategories.length > 0 && (
              <ul className="submenu">
                {section.subcategories.map((subSection) => (
                  <li key={subSection.id}>{subSection.title}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;
