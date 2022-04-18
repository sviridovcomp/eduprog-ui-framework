import classNames from "classnames";
import React, { FC, useState } from "react";
import "./ToggleBlock.scss";

export interface IToggleBlockOptions<Type> {
  id: string;
  label?: React.ReactNode;
  value?: Type;
}

export interface IToggleBlockProps {
  options: Array<IToggleBlockOptions<any>>;

  onChange?: (value?: IToggleBlockOptions<any>) => void;
}

const ToggleBlock: FC<IToggleBlockProps> = ({ options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<IToggleBlockOptions<any>>(
    options[0]
  );

  const onSelectItem = (item: IToggleBlockOptions<any>) => {
    setSelectedValue(item);

    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div className="toggle-block">
      {options.map(({ id, label, value }) => (
        <div
          className={classNames("toggle-block-item", {
            "toggle-block-item-selected": selectedValue?.id == id,
          })}
          style={{ width: `calc(100% / ${options.length})` }}
          onClick={() => onSelectItem({ id: id, label: label, value: value })}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default ToggleBlock;
