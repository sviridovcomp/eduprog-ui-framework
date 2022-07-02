import clsx from "clsx";
import React, { FC, useEffect, useState } from "react";
import Checkbox, { CheckboxPropsType } from "../../Checkbox/Checkbox";
import { TabsValue } from "../TabsTypes";

export type TabsWithCheckboxProps = {
  /**
   * Options
   */
  options?: Array<TabsValue>;

  /**
   * onChange callback handler
   */
  onChange?: (value: TabsValue[]) => void;

  checkboxProps?: CheckboxPropsType;
};

/**
 * Multiple choice tabs
 */
const TabsWithCheckboxes: FC<TabsWithCheckboxProps> = ({
  options,
  onChange,
  checkboxProps,
}) => {
  const [selectedValue, setSelectedValue] = useState<TabsValue[]>([]);

  const onChecked = (params: TabsValue) => {
    if (selectedValue.some((option) => option.key == params.key)) {
      setSelectedValue(
        selectedValue.filter((value) => value.key != params.key)
      );
    } else {
      setSelectedValue([...selectedValue, params]);
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(selectedValue);
    }
  }, [selectedValue]);

  return (
    <div className="toggle-block">
      {options?.map((option) => (
        <div
          key={option.key}
          style={{ width: `calc(100% / ${options.length})` }}
          className={clsx("toggle-block-item", {
            "toggle-block-item-selected": selectedValue.includes(option),
          })}
          onClick={() => onChecked(option)}
        >
          <Checkbox
            view="default"
            style={{ backgroundColor: "#fff" }}
            position="right"
            checkboxStyle={{ userSelect: "none", gap: "1rem" }}
            checked={selectedValue.includes(option)}
            disabled
            {...checkboxProps}
          >
            {option.label}
          </Checkbox>
        </div>
      ))}
    </div>
  );
};

export default TabsWithCheckboxes;
