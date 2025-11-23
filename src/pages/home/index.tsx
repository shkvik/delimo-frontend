import { LayoutPage } from "@/pages/layout-page";
import { ActivePools } from "./components/active-pools";
import { RecentActivity } from "./components/recent-activity";
import { TipsRecommendations } from "./components/tips-recommendations";
import { CreatePoolButton } from "@/shared/components/create-pool-button";
import { TopPools } from "./components/top-pools";

export const HomePage = () => {
  return (
    <LayoutPage>
      <CreatePoolButton />
      <ActivePools />
      <TopPools />
      <RecentActivity />
      <TipsRecommendations />
    </LayoutPage>
  );
};
