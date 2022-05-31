import React from "react";
import BottomDrawerStyles, { getClassNames } from "./BottomDrawerStyles";

function useApplyBottomDrawerStyles(duration: number, hideScrollbars: boolean) {
  const identifier = React.useMemo(() => Math.random().toString(36).substr(2), []);
  const classNames = React.useMemo(() => getClassNames(identifier), [identifier]);
  
  React.useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    const styles = BottomDrawerStyles(identifier, {duration, hideScrollbars});

    const tag = document.createElement("style");
    tag.setAttribute("data-react-bottom-drawer", identifier);
    tag.innerHTML = styles;

    document.head.appendChild(tag);

    return function() {
      const stylesheet = document.querySelector(`style[data-react-bottom-drawer='${identifier}']`);
      if (stylesheet) { stylesheet.remove(); }
    };
  }, [duration, hideScrollbars]);

  return classNames;
}

export default useApplyBottomDrawerStyles;