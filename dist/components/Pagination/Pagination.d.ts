import { FC } from "react";
import "./Pagination.scss";
export interface IPaginationProps {
    count?: number;
    siblingCount?: number;
    defaultValue?: number;
}
declare const Pagination: FC<IPaginationProps>;
export default Pagination;
