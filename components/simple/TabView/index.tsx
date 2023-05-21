import React, { FC, useState } from 'react';
import './styles.module.css';

type Tab = {
  name: string;
  component: React.ElementType;
};

interface TabsProps {
  tabs: Tab[];
}

const Tabs: FC<TabsProps> = ({ tabs = [] }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className="wrapper flex justify-space-between align-center radius">
        {tabs.map((tab, i) => (
          <div
            key={i}
            className={`flex justify-center align-center radius ${
              selected === i ? 'selected' : ''
            }`}
            onClick={() => setSelected(i)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      {tabs.length > 0 && React.createElement(tabs[selected].component)}
    </div>
  );
};

export default Tabs;
