import { useEffect, useState } from "react";

export const useTelegramMiniApp = () => {
  const app = window?.Telegram?.WebApp;
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const app = window?.Telegram?.WebApp;
    if (!app) {
      return;
    }

    app.ready();
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(
      navigator.userAgent || ""
    );
    setIsMobile(isMobile);

    const version = Number(app.version);

    if (isMobile && version && version > 8.0) {
      app.requestFullscreen();
    }
  }, [app]);

  return {
    webApp: app,
    initData: app?.initDataUnsafe,
    user: app?.initDataUnsafe?.user,
    isMobile,
  };
};
