import React, { FC } from "react";
import "./Backdrop.scss";
export interface IBackdropProps {
    open: boolean;
    timeout?: number;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
declare const Backdrop: FC<IBackdropProps>;
export default Backdrop;
