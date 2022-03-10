import { MultipleSelectPropsType } from "@components/Select/MultipleSelect/MultipleSelectProps";
import React, { FC } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import MultipleSelectSmallDevice from "@components/Select/MultipleSelectSmallDevice/MultipleSelectSmallDevice";
import MultipleSelectLargeDevice from "@components/Select/MultipleSelectLargeDevice/MultipleSelectLargeDevice";

const MultipleSelect: FC<MultipleSelectPropsType<any>> = (props) => {
  if (isMobile) {
    return <MultipleSelectSmallDevice {...props} />;
  }
  if (isBrowser) {
    return <MultipleSelectLargeDevice {...props} />;
  }
  return <></>;
};

export default MultipleSelect;
