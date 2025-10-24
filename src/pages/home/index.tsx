import { LayoutPage } from "@/shared/ui/layout-page";
import { BalanceOverview } from "./components/balance-overview";
import { ActivePools } from "./components/active-pools";
import { RecentActivity } from "./components/recent-activity";
import { Statistics } from "./components/statitics";
import { TipsRecommendations } from "./components/tips-recommendations";
import { CreatePoolButton } from "@/shared/components/create-pool-button";

export const HomePage = () => {
  return (
    <LayoutPage>
      <BalanceOverview />
      <CreatePoolButton />
      <ActivePools />
      <RecentActivity />
      <Statistics />
      <TipsRecommendations />
    </LayoutPage>
  );
};
