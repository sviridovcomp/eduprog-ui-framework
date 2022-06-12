import clsx from "clsx";
import React, { FC, useEffect, useState } from "react";
import "./TabsWithToggles.scss";

export interface TabsWithTogglesOptions<Type> {
  id: string;
  name?: React.ReactNode;
  value?: Type;
}

export interface IToggleBlockProps {
  options: Array<TabsWithTogglesOptions<any>>;

  defaultValue?: TabsWithTogglesOptions<any>;

  style?: React.CSSProperties;

  onChange?: (value?: TabsWithTogglesOptions<any>) => void;
}

const TabsWithToggles: FC<IToggleBlockProps> = ({
  options,
  onChange,
  style,
  defaultValue,
}) => {
  const [selectedValue, setSelectedValue] = useState<
    TabsWithTogglesOptions<any>
  >(defaultValue!);

  const onSelectItem = (item: TabsWithTogglesOptions<any>) => {
    setSelectedValue(item);
  };

  useEffect(() => {
    if (onChange) {
      onChange(selectedValue);
    }
  }, [selectedValue]);

  return (
    <div className="toggle-block" style={style}>
      {options.map(({ id, name, value }) => (
        <div
          key={id}
          className={clsx("toggle-block-item", {
            "toggle-block-item-selected": selectedValue?.name == name,
          })}
          style={{ width: `calc(100% / ${options.length})` }}
          onClick={() => onSelectItem({ id: id, name: name, value: value })}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default TabsWithToggles;
