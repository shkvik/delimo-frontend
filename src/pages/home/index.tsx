import { LayoutPage } from "@/pages/layout-page";
import { Box } from "@chakra-ui/react";
import { ActivePools } from "./components/active-pools";
import { RecentActivity } from "./components/recent-activity";
import { TipsRecommendations } from "./components/tips-recommendations";
import { CreatePoolButton } from "@/shared/components/create-pool-button";
import { TopPools } from "./components/top-pools";

export const HomePage = () => {
  return (
    <LayoutPage>
      <CreatePoolButton />
      <Box pt={4} pb="150px">
        <ActivePools />
        <TopPools />
        <RecentActivity />
        <TipsRecommendations />
      </Box>
    </LayoutPage>
  );
};
