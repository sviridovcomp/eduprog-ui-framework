import Calendar from "@components/Calendar/Calendar";
import {
  autoUpdate,
  flip,
  offset,
  size,
  useFloating,
} from "@floating-ui/react-dom-interactions";
import React, { FC, useState } from "react";
import Input from "../Input/Input";
import "./InputDate.scss";
import dayjs from "dayjs";
import { BrowserView, MobileView } from "react-device-detect";
import CalendarMobile from "@components/CalendarMobile/CalendarMobile";

export interface InputDateProps {
  label: string;
  dateFormat?: string;
}

const InputDate: FC<InputDateProps> = ({ label, dateFormat = "D.MM.YYYY" }) => {
  const [open, setOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState<Array<Date>>([]);
  const { x, y, reference, floating, strategy } = useFloating({
    middleware: [
      offset(8),
      flip(),
      size({
        apply({ availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            maxHeight: availableHeight,
          });
        },
        padding: 8,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  return (
    <div className="InputDate">
      <Input
        label={label}
        controlRef={reference}
        onClick={() => setOpen(!open)}
        defaultValue={selectedDates
          .map((date: Date) => {
            return dayjs(date).format(dateFormat);
          })
          .join(", ")}
      />

      {open && (
        <div>
          {/* @ts-ignore */}
          <BrowserView>
            <div
              className="Popup"
              ref={floating}
              style={{ position: strategy, top: y ?? 0, left: x ?? 0 }}
            >
              <Calendar
                defaultValue={selectedDates}
                onChange={(dates: Date[]) => setSelectedDates(dates)}
              />
            </div>
          </BrowserView>
          {/* @ts-ignore */}
          <MobileView>
            <CalendarMobile
              defaultValue={selectedDates}
              onChange={(dates: Date[]) => setSelectedDates(dates)}
              onClose={() => setOpen(false)}
            />
          </MobileView>
        </div>
      )}
    </div>
  );
};

export default InputDate;
