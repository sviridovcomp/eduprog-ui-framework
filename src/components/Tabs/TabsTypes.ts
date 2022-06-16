import { IKeyValue } from "@utils/utils/common/types";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface TabsValue extends IKeyValue<string, any> {
    label: React.ReactNode;
}
