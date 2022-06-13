import { FC, useState } from "react";
import Button from "@components/Button";
import React from "react";
import "./Pagination.scss";
import clsx from "clsx";
import range from "lodash/range";

export interface IPaginationProps {
  count?: number;
  siblingCount?: number;
  defaultValue?: number;
}

const Pagination: FC<IPaginationProps> = ({
  count = 10,
  defaultValue,
  siblingCount,
}) => {
  const [selectedPage, setSelectedPage] = useState(defaultValue);

  return (
    <ul className="Pagination">
      {range(1, siblingCount == undefined ? count : siblingCount).map(
        (page) => (
          <li key={page}>
            <Button
              onClick={() => setSelectedPage(page)}
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
