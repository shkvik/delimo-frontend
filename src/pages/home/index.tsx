import { LayoutPage } from "@/pages/layout-page";
import { BalanceOverview } from "./components/balance-overview";
import { ActivePools } from "./components/active-pools";
import { RecentActivity } from "./components/recent-activity";
import { TipsRecommendations } from "./components/tips-recommendations";
import { CreatePoolButton } from "@/shared/components/create-pool-button";
import { TopPools } from "./components/top-pools";
import { TrendingPools } from "./components/trending-pools";

export const HomePage = () => {
  return (
    <LayoutPage>
      <BalanceOverview />
      <CreatePoolButton />
      <TrendingPools />
      <ActivePools />
      <TopPools />
      <RecentActivity />
      <TipsRecommendations />
    </LayoutPage>
  );
};
