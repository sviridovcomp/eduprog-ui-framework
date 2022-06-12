import clsx from "clsx";
import React, { FC, useEffect, useState } from "react";
import Checkbox, {
  CheckboxPropsType,
} from "../../Checkboxes/Checkbox/Checkbox";

export type TabsWithCheckboxesValue<Type> = CheckboxPropsType & {
  id: string;
  label?: React.ReactNode;
  value?: Type;
};

export type TabsWithCheckboxProps = {
  /**
   * Options
   */
  options?: Array<TabsWithCheckboxesValue<any>>;

  /**
   * onChange callback handler
   */
  onChange?: (value: TabsWithCheckboxesValue<any>[]) => void;
};

const TabsWithCheckboxes: FC<TabsWithCheckboxProps> = ({
  options,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<
    TabsWithCheckboxesValue<any>[]
  >([]);

  const onChecked = (params: TabsWithCheckboxesValue<any>) => {
    if (selectedValue.some((option) => option.id == params.id)) {
      setSelectedValue(selectedValue.filter((value) => value.id != params.id));
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
          key={option.id}
          style={{ width: `calc(100% / ${options.length})` }}
          className={clsx("toggle-block-item", {
            "toggle-block-item-selected": selectedValue.includes(option),
          })}
          onClick={() => onChecked(option)}
        >
          <Checkbox
            style={{ backgroundColor: "#fff" }}
            position="right"
            wrapperStyle={{ userSelect: "none", gap: "1rem" }}
            checked={selectedValue.includes(option)}
            disabled
            {...option}
          >
            {option.label}
          </Checkbox>
        </div>
      ))}
    </div>
  );
};

export default TabsWithCheckboxes;
