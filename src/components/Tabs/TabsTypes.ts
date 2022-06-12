import { IKeyValue } from "@utils/utils/common/types";
import React from "react";

export interface TabsValue extends IKeyValue<string, any> {
    label: React.ReactNode;
}
