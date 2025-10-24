import { LayoutPage } from "@/shared/ui/layout-page";
import { Header } from "./components/header";
import { BalanceOverview } from "./components/balance-overview";

export const HomePage = () => {
  return (
    <LayoutPage>
      <Header />
      <BalanceOverview />
    </LayoutPage>
  );
};
