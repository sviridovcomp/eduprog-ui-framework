import { FC, useState } from "react";
import Button from "@components/Button";
import React from "react";
import "./Pagination.scss";
import classNames from "classnames";
import _ from "lodash";

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
      {_.range(1, siblingCount == undefined ? count : siblingCount).map(
        (page) => (
          <li key={page}>
            <Button
              onClick={() => setSelectedPage(page)}
              className={classNames("Pagination-button", {
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
