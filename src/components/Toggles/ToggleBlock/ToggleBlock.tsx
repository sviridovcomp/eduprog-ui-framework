import classNames from "classnames";
import React, { FC, useState } from "react";
import "./ToggleBlock.scss";

export interface IToggleBlockOptions<Type> {
  id: string;
  name?: React.ReactNode;
  value?: Type;
}

export interface IToggleBlockProps {
  options: Array<IToggleBlockOptions<any>>;

  defaultValue?: IToggleBlockOptions<any>;

  style?: React.CSSProperties;

  onChange?: (value?: IToggleBlockOptions<any>) => void;
}

const ToggleBlock: FC<IToggleBlockProps> = ({
  options,
  onChange,
  style,
  defaultValue,
}) => {
  const [selectedValue, setSelectedValue] = useState<IToggleBlockOptions<any>>(
    defaultValue!
  );

  const onSelectItem = (item: IToggleBlockOptions<any>) => {
    setSelectedValue(item);

    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div className="toggle-block" style={style}>
      {options.map(({ id, name, value }) => (
        <div
          className={classNames("toggle-block-item", {
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

export default ToggleBlock;
