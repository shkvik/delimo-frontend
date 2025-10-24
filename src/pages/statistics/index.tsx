import { LayoutPage } from "@/pages/layout-page";
import { StatsOverview } from "./components/stats-overview";
import { Charts } from "./components/charts";
import { TopCategories } from "./components/top-categories";
import { PersonalStats } from "./components/personal-stats";
import { RecentActivity } from "./components/recent-activity";

export const StatisticsPage = () => {
  return (
    <LayoutPage>
      <StatsOverview />
      <Charts />
      <TopCategories />
      <PersonalStats />
      <RecentActivity />
    </LayoutPage>
  );
};
