import { keyCode } from "@utils/utils";
import { useEffect } from "react";

export const useKeyDown = (callback: () => void, key: keyCode, enabled = true) => {
    const currentCallback = (event: KeyboardEvent) => {
        if (event.keyCode != key) {
            return;
        }

        callback();
    };

    useEffect(() => {
        if (!enabled) {
            return;
        }

        window.addEventListener("keydown", currentCallback);

        return () => {
            window.removeEventListener("keydown", currentCallback);
        };
    });
};