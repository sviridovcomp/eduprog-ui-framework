import { isMobile, isBrowser } from "react-device-detect";
import React, { FC } from "react";
import { SelectTypeProps } from "@components/Select/Select/SelectProps";
import SelectSmallDevice from "@components/Select/SelectSmallDevice/SelectSmallDevice";
import SelectLargeDevice from "@components/Select/SelectLargeDevice/SelectLargeDevice";

const Select: FC<SelectTypeProps<any>> = (props) => {
  if (isMobile) {
    return <SelectSmallDevice {...props} />;
  } else if (isBrowser) {
    return <SelectLargeDevice {...props} />;
  }
  return <></>;
};

export default Select;
