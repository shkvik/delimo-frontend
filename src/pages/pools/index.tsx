import { LayoutPage } from "@/pages/layout-page";
import { SearchBar } from "./components/search-bar";
import { ActivePools } from "./components/active-pools";
import { CompletedPools } from "./components/completed-pools";
import { SummaryStats } from "./components/summary-stats";
import { CreatePoolButton } from "../../shared/components/create-pool-button";
import { CreatePoolSection } from "../../shared/components/create-pool-section";

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
