import { FC } from "react";
import React from "react";
import "./Pagination.scss";
export interface IPaginationProps {
    /**
     * Pages count
     */
    count?: number;
    /**
     * Number of maximum items shown
     */
    siblingCount?: number;
    /**
     * Page by default
     */
    defaultValue?: number;
    /**
     * onChange callback handler
     */
    onChange?: (value: number) => void;
    nextButton?: React.ReactNode;
    previousButton?: React.ReactNode;
}
/**
 * Pagination component enables the user to select a specific page from a range of pages
 */
declare const Pagination: FC<IPaginationProps>;
export default Pagination;
