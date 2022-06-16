import { MultipleSelectPropsType } from "@components/Select/MultipleSelect/MultipleSelectProps";
import React, { FC } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import MultipleSelectSmallDevice from "@components/Select/MultipleSelectSmallDevice/MultipleSelectSmallDevice";
import MultipleSelectLargeDevice from "@components/Select/MultipleSelectLargeDevice/MultipleSelectLargeDevice";

/**
 * Component for creating a drop-down list with a multiple choice menu
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MultipleSelect: FC<MultipleSelectPropsType<any>> = (props) => {
  if (isMobile) {
    return <MultipleSelectSmallDevice {...props} />;
  } else if (isBrowser) {
    return <MultipleSelectLargeDevice {...props} />;
  }
  return <></>;
};

export default MultipleSelect;
