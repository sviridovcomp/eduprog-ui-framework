import { FC, useState } from "react";
import Button from "@components/Button";
import React from "react";
import "./Pagination.scss";
import clsx from "clsx";
import range from "lodash/range";

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
}

/**
 * Pagination component enables the user to select a specific page from a range of pages
 */
const Pagination: FC<IPaginationProps> = ({
  count = 10,
  defaultValue,
  siblingCount,
  onChange,
}) => {
  const [selectedPage, setSelectedPage] = useState(defaultValue);

  return (
    <ul className="Pagination">
      {range(1, siblingCount == undefined ? count : siblingCount).map(
        (page) => (
          <li key={page}>
            <Button
              onClick={() => {
                setSelectedPage(page);
                onChange && onChange(page);
              }}
              className={clsx("Pagination-button", {
                "Pagination-button_selected": selectedPage == page,
              })}
            >
              {page}
            </Button>
          </li>
        )
      )}
    </ul>
  );
};

export default Pagination;
