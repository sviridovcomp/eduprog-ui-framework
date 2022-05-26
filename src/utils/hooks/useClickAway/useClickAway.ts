// import React from "react";

// export const useClickAway = (
//   ref: React.RefObject<HTMLElement | null>,
//   callback: (event: Event) => void
// ) => {
//   React.useEffect(() => {
//     const handler: EventListener = (event) => {
//       if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
//         return;
//       }

//       callback(event);
//     };

//     document.addEventListener("mousedown", handler);
//     document.addEventListener("touchstart", handler);

//     return () => {
//       document.removeEventListener("mousedown", handler);
//       document.removeEventListener("touchstart", handler);
//     };
//   }, [ref]);
// };

import { RefObject, useEffect, useRef } from 'react';

export const useClickAway = (
  ref: RefObject<HTMLElement | null>,
  callback: (event: Event) => void,
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler: EventListener = (event) => {
      const { current: target } = ref;

      if (target && !target.contains(event.target as HTMLElement)) {
        callbackRef.current(event);
      }
    }

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [ref]);
};