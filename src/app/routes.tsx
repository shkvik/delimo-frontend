import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "@/shared/config/routes";
import { HomePage } from "@/pages/home";
import { PoolsPage } from "@/pages/pools";
import { StatisticsPage } from "@/pages/statistics";
import { ProfilePage } from "@/pages/profile";
import { CreatePoolPage } from "@/features/pool/create";
import { PoolPage } from "@/features/pool/page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.POOLS} element={<PoolsPage />} />
      <Route path={ROUTES.STATISTICS} element={<StatisticsPage />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />

      <Route path={ROUTES.POOLS_CREATE} element={<CreatePoolPage />} />
      <Route path={ROUTES.POOLS_PAGE} element={<PoolPage />} />

      <Route path="/" element={<Navigate to={ROUTES.HOME} replace />} />
      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
};
