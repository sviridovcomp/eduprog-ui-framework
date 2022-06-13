import clsx from "clsx";
import React, { FC, useEffect, useState } from "react";
import { TabsValue } from "../TabsTypes";
import "./TabsWithToggles.scss";

export interface IToggleBlockProps {
  /**
   * Options
   */
  options: Array<TabsValue>;

  /** defaultValue*/
  defaultValue?: TabsValue;

  style?: React.CSSProperties;

  onChange?: (value?: TabsValue) => void;
}

/**
 * Single-selection tabs
 */
const TabsWithToggles: FC<IToggleBlockProps> = ({
  options,
  onChange,
  style,
  defaultValue,
}) => {
  const [selectedValue, setSelectedValue] = useState<TabsValue>(defaultValue!);

  const onSelectItem = (item: TabsValue) => {
    setSelectedValue(item);
  };

  useEffect(() => {
    if (onChange) {
      onChange(selectedValue);
    }
  }, [selectedValue]);

  return (
    <div className="toggle-block" style={style}>
      {options.map((option, index) => (
        <div
          key={index}
          className={clsx("toggle-block-item", {
            "toggle-block-item-selected": selectedValue?.key == option.key,
          })}
          style={{ width: `calc(100% / ${options.length})` }}
          onClick={() => onSelectItem(option)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default TabsWithToggles;
