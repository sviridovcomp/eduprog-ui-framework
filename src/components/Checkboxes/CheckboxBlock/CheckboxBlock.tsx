import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";
import Checkbox, { CheckboxPropsType } from "../Checkbox/Checkbox";

export type ICheckboxBlockValue<Type> = CheckboxPropsType & {
  id: string;
  label?: React.ReactNode;
  value?: Type;
};

export type CheckboxBlockPropsType = {
  options?: Array<ICheckboxBlockValue<any>>;
  onChange?: (value: ICheckboxBlockValue<any>[]) => void;
};

const CheckboxBlock: FC<CheckboxBlockPropsType> = ({ options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<
    ICheckboxBlockValue<any>[]
  >([]);

  const onChecked = (option: ICheckboxBlockValue<any>) => {
    if (
      selectedValue.some((item) => {
        return item.id == option.id;
      })
    ) {
      setSelectedValue(selectedValue.filter((value) => value.id == option.id));
    } else {
      setSelectedValue([...selectedValue, option]);
    }
  };

  useEffect(() => {
    if (onChange && selectedValue.length != 0) {
      console.log(selectedValue);
      onChange(selectedValue);
    }
  }, [selectedValue]);

  return (
    <div className="toggle-block">
      {options?.map((option) => (
        <div
          className={classNames("toggle-block-item", {
            "toggle-block-item-selected": selectedValue.includes(option),
          })}
        >
          <Checkbox
            style={{ backgroundColor: "#fff" }}
            {...option}
            onChange={() => onChecked(option)}
          >
            {option.label}
          </Checkbox>
        </div>
      ))}
    </div>
  );
};

export default CheckboxBlock;
