import { ReactElement, HTMLAttributes, FunctionComponent, RefObject } from "react";
declare const useClickAway: (ref: RefObject<HTMLElement | null>, callback: (event: Event) => void) => void;
declare type FocusEvents = "focusin" | "focusout";
declare type MouseEvents = "click" | "mousedown" | "mouseup";
declare type TouchEvents = "touchstart" | "touchend";
declare type Events = FocusEvent | MouseEvent | TouchEvent;
interface Props extends HTMLAttributes<HTMLElement> {
    onClickAway: (event: Events) => void;
    focusEvent?: FocusEvents;
    mouseEvent?: MouseEvents;
    touchEvent?: TouchEvents;
    children: ReactElement<any>;
}
declare const ClickAwayListener: FunctionComponent<Props>;
export { useClickAway, ClickAwayListener };
