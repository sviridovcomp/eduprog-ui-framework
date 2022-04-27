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

  const onChecked = (params: ICheckboxBlockValue<any>) => {
    console.log(
      params.id,
      selectedValue.some((item) => item.id != params.id)
    );
    if (selectedValue.some((option) => option.id == params.id)) {
      setSelectedValue(selectedValue.filter((value) => value.id != params.id));
    } else {
      setSelectedValue([...selectedValue, params]);
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
          style={{ width: `calc(100% / ${options.length})` }}
          className={classNames("toggle-block-item", {
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

export default CheckboxBlock;
