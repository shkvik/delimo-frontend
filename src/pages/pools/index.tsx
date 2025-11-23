import { LayoutPage } from "@/pages/layout-page";
import { Box } from "@chakra-ui/react";
import { SearchBar } from "./components/search-bar";
import { ActivePools } from "./components/active-pools";
import { CompletedPools } from "./components/completed-pools";
import { SummaryStats } from "./components/summary-stats";
import { CreatePoolButton } from "../../shared/components/create-pool-button";

export const PoolsPage = () => {
  return (
    <LayoutPage>
      <CreatePoolButton />
      <Box pb={24}>
        <SearchBar />
        <ActivePools />
        <CompletedPools />
        <SummaryStats />
      </Box>
    </LayoutPage>
  );
};
