import { useEffect, useRef, useState } from "react";

export const useHideBottomNavOnKeyboard = (shrinkThresholdPercent = 25) => {
  const [visible, setVisible] = useState(true);
  const baseHeightRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const vv = window.visualViewport;
    if (!vv) return;

    if (baseHeightRef.current === null) {
      baseHeightRef.current = vv.height;
    }

    const update = () => {
      const baseHeight = baseHeightRef.current ?? vv.height;
      const currentHeight = vv.height;
      const shrinkPercent = ((baseHeight - currentHeight) / baseHeight) * 100;

      setVisible(shrinkPercent < shrinkThresholdPercent);
    };

    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);

    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
    };
  }, [shrinkThresholdPercent]);

  return visible;
};
