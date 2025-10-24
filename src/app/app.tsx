import { Box } from "@chakra-ui/react";
import { AppRoutes } from "./routes";
import { GlobalScrollbarHide } from "@/shared/ui/global-scrollbar-hide";
import { useTelegramMiniApp } from "@/shared/hooks/use-telegram-mini-app";

export const App = () => {
  useTelegramMiniApp();

  return (
    <Box minH="100vh" color="white">
      <AppRoutes />
      <GlobalScrollbarHide />
    </Box>
  );
};
