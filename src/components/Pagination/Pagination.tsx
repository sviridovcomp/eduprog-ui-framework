import { FC, useEffect, useState } from "react";
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

  nextButton?: React.ReactNode;

  previousButton?: React.ReactNode;
}

/**
 * Pagination component enables the user to select a specific page from a range of pages
 */
const Pagination: FC<IPaginationProps> = ({
  count = 10,
  defaultValue = 1,
  siblingCount = 10,
  onChange,
  nextButton = (
    <svg
      style={{ display: "flex" }}
      fill="currentColor"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z" />
    </svg>
  ),
  previousButton = (
    <svg
      style={{ display: "flex" }}
      fill="currentColor"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M14.91 6.71c-.39-.39-1.02-.39-1.41 0L8.91 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41z" />
    </svg>
  ),
}) => {
  const [selectedPage, setSelectedPage] = useState(defaultValue);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (onChange) {
      onChange(selectedPage);
    }
  }, [selectedPage]);

  const NextFrame = () => {
    if (frame + siblingCount < count) {
      setFrame(frame + siblingCount);
      setSelectedPage(frame + siblingCount + 1);
    }
  };

  const PrevFrame = () => {
    if (frame > 0) {
      setFrame(frame - siblingCount);
      setSelectedPage(frame - siblingCount + siblingCount);
    }
  };

  const NextPage = () => {
    if (selectedPage < count) {
      setSelectedPage(selectedPage + 1);
      if (frame + siblingCount <= selectedPage) {
        NextFrame();
      }
    }
  };

  const PrevPage = () => {
    if (selectedPage > 1) {
      setSelectedPage(selectedPage - 1);

      if (frame >= selectedPage) {
        PrevFrame();
      }
    }
  };

  const initialState = 1;
  const active =
    selectedPage % siblingCount == 0
      ? siblingCount
      : selectedPage % siblingCount;
  const leftActive = 2 * (active == 0 ? initialState : active);
  const leftActiveOffset = 0.25 * (active == 0 ? initialState : active);

  return (
    <ul className="Pagination">
      <div
        className={clsx("Pagination-button", "Pagination-button-active")}
        style={{
          left: `
            ${leftActive + leftActiveOffset}rem`,
        }}
      >
        {selectedPage}{" "}
      </div>
      <Button
        className="Pagination-button"
        onClick={PrevPage}
        disabled={selectedPage <= 1}
      >
        {previousButton}
      </Button>
      {range(1, siblingCount == undefined ? count : siblingCount + 1).map(
        (page) => (
          <li key={frame + page}>
            <Button
              // view={frame + page == selectedPage ? "action" : "default"}
              onClick={() => {
                setSelectedPage(frame + page);
              }}
              className={clsx("Pagination-button")}
            >
              {frame + page}
            </Button>
          </li>
        )
      )}

      <Button
        className="Pagination-button"
        disabled={selectedPage + 1 >= count}
        onClick={() => NextPage()}
      >
        {nextButton}
      </Button>
    </ul>
  );
};

export default Pagination;
