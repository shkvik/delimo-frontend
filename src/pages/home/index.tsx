import { LayoutPage } from "@/shared/ui/layout-page";
import { Header } from "./components/header";
import { BalanceOverview } from "./components/balance-overview";
import { ActivePools } from "./components/active-pools";
import { RecentActivity } from "./components/recent-activity";

export const HomePage = () => {
  return (
    <LayoutPage>
      <Header />
      <BalanceOverview />
      <ActivePools />
      <RecentActivity />
    </LayoutPage>
  );
};
