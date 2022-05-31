import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import { useLayoutEffect } from "react";

function usePreventScroll(enabled: boolean, contentWrapperClass: string) {
  useLayoutEffect(() => {
    if (typeof document === "undefined" || !enabled) {
      return;
    }
    
    const scrollableElement = <Element>document.querySelector(`.${contentWrapperClass}`);

    disableBodyScroll(scrollableElement);

    return () => {
      enableBodyScroll(scrollableElement);
    };
  }, [enabled]);
}

export default usePreventScroll;