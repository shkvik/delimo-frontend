import { LayoutPage } from "@/pages/layout-page";
import { Box } from "@chakra-ui/react";
import { SearchBar } from "./components/search-bar";
import { ActivePools } from "./components/active-pools";
import { CompletedPools } from "./components/completed-pools";
import { SummaryStats } from "./components/summary-stats";
import { CreatePoolButton } from "../../shared/components/create-pool-button";
import { CreatePoolSection } from "../../shared/components/create-pool-section";

export const PoolsPage = () => {
  return (
    <LayoutPage>
      <CreatePoolButton />
      <Box pb={24}> {/* Добавляем отступ снизу, чтобы контент не перекрывался кнопкой */}
        <SearchBar />
        <ActivePools />
        <CompletedPools />
        <SummaryStats />
      </Box>
    </LayoutPage>
  );
};
