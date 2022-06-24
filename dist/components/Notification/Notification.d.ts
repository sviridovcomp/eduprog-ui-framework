import { NotificationPropsType } from "./NotificationItem";
export declare const InitNotification: (props: NotificationPropsType) => {
    id: string;
    className?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    onPointerDown?: ((event?: import("react").PointerEvent<Element> | undefined) => void) | undefined;
    onPointerEnter?: ((event?: import("react").PointerEvent<Element> | undefined) => void) | undefined;
    onPointerLeave?: ((event?: import("react").PointerEvent<Element> | undefined) => void) | undefined;
    onPointerUp?: ((event?: import("react").PointerEvent<Element> | undefined) => void) | undefined;
    onPointerMove?: ((event?: import("react").PointerEvent<Element> | undefined) => void) | undefined;
    onFocus?: ((event?: import("react").FocusEvent<Element, Element> | undefined) => void) | undefined;
    onBlur?: ((event?: import("react").FocusEvent<Element, Element> | undefined) => void) | undefined;
    hasCloser?: boolean | undefined;
    icon?: import("react").ReactNode;
    onClose?: ((id?: string | undefined) => void) | undefined;
    title: string;
    content: import("react").ReactNode;
};
export declare const Notify: (props: NotificationPropsType) => void;
