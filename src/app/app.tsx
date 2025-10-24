import { Box } from "@chakra-ui/react";
import { AppRoutes } from "./routes";
import { BottomNav } from "@/widgets/bottom-nav/bottom-nav";
import { GlobalScrollbarHide } from "@/shared/ui/global-scrollbar-hide";
import { useTelegramMiniApp } from "@/shared/hooks/use-telegram-mini-app";
import { Header } from "@/widgets/header/header";

export const App = () => {
  useTelegramMiniApp();

  return (
    <Box minH="100vh" color="white">
      <Header />
      <AppRoutes />
      <BottomNav />
      <GlobalScrollbarHide />
    </Box>
  );
};
