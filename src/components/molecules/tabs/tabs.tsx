import React, { memo } from "react";

import CSS from "./tabs.module.scss";

export interface TabHeader {
  key: number;
  path: string;
  label: JSX.Element | string;
  count?: number;
}

interface TabsProps {
  defaultActiveKey?: string | number;
  items: TabHeader[];
  active?: string | number;
  onChange?: (key: TabHeader["key"], path: TabHeader["path"]) => void;
}

function TabsMolecule({
  defaultActiveKey = 1,
  active = defaultActiveKey,
  items = [],
  onChange = () => {
    console.log("clicked");
  },
}: TabsProps): JSX.Element {
  return (
    <div className={CSS.tab_container}>
      <div
        className={`${CSS["cs-grid-container"]} ${
          CSS[`cs-grid-count-${items.length}`]
        }`}
      >
        {items.map((item, index) => {
          return (
            <div
              key={item.key}
              onClick={() => onChange(item.key, item.path)}
              className={`${CSS["cs-tab-title"]} ${CSS["cs-cursor-pointer"]} ${
                CSS["cs-center"]
              } ${CSS["cs-bp-10"]} ${
                active === item.key ? CSS["cs-active-tab"] : ""
              }`}
            >
              {item.label}
              {item.count ? (
                <div
                  className={`${CSS["cs-tab-notify-count"]} ${CSS["cs-center"]}`}
                >
                  {item.count}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const Tabs = memo(TabsMolecule);
export default Tabs;
