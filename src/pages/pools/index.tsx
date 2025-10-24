import { LayoutPage } from "@/shared/ui/layout-page";
import { SearchBar } from "./components/search-bar";
import { ActivePools } from "./components/active-pools";
import { CompletedPools } from "./components/completed-pools";
import { SummaryStats } from "./components/summary-stats";
import { CreatePoolButton } from "../../shared/components/create-pool-button";

export const PoolsPage = () => {
  return (
    <LayoutPage>
      <SearchBar />
      <ActivePools />
      <CompletedPools />
      <SummaryStats />
      <CreatePoolButton />
    </LayoutPage>
  );
};
