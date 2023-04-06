import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {showSubmenu, location, submenuData: {page, links}} = useGlobalContext();
  const [cols, setCols] = useState('col-2');
  const containerRef = useRef(null);

  useEffect(() => {
    setCols('col-2');
    const submenu = containerRef.current;
    const {center, bottom} = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if(links.length === 3) {
      setCols('col-3');
    } else if(links.length > 3) {
      setCols('col-4');
    }
  }, [location, links]);

  return <aside className={`${showSubmenu ? 'submenu show': 'submenu'}`} ref={containerRef}>
    <h4>{page}</h4>
    <div className={`submenu-center ${cols}`}>
      {links.map((link, index) => {
        const {url, icon, label} = link;
        return <a href={url} key={index}>{icon}{label}</a>
      })}
    </div>
  </aside>
}

export default Submenu
