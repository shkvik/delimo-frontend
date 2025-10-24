import { LayoutPage } from "@/shared/ui/layout-page";
import { SearchBar } from "./components/search-bar";
import { ActivePools } from "./components/active-pools";

export const PoolsPage = () => {
  return (
    <LayoutPage>
      <SearchBar />
      <ActivePools />
    </LayoutPage>
  );
};
