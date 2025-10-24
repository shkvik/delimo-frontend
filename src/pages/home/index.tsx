import { LayoutPage } from "@/shared/ui/layout-page";
import { Header } from "./components/header";
import { BalanceOverview } from "./components/balance-overview";
import { ActivePools } from "./components/active-pools";
import { RecentActivity } from "./components/recent-activity";
import { Statistics } from "./components/statitics";
import { CompletedPools } from "./components/completed-pools";
import { TipsRecommendations } from "./components/tips-recommendations";
import { PaymentMethods } from "./components/payment-methods";

export const HomePage = () => {
  return (
    <LayoutPage>
      <Header />
      <BalanceOverview />
      <ActivePools />
      <RecentActivity />
      <Statistics />
      <CompletedPools />
      <TipsRecommendations />
      <PaymentMethods />
    </LayoutPage>
  );
};
