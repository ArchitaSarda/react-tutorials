import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const categories = ['all', ...new Set(items.map(item => item.category))]

function App() {

  const [menuList, setMenuList] = useState(items);

  const filterItems = (selectedCategory) => {
    if(selectedCategory === 'all') {
      setMenuList(items);
    } else {
      const newMenuList = items.filter(item => item.category === selectedCategory);
      setMenuList(newMenuList);
    }
    
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories 
        categories={categories}
        filterItems={filterItems}
      />
      <Menu 
        menuList={menuList}
      />
    </section>
  </main>
}

export default App;
