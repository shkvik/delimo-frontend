import { Routes, Route, Navigate } from "react-router-dom";
// import { GamePage } from "../pages/game";
// import { LeadersPage } from "../pages/leaders";
// import { ProfilePage } from "../pages/profile";
// import { StoragePage } from "../pages/storage";
// import { ROUTES } from "@/shared/config/routes";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path={ROUTES.GAME} element={<GamePage />} />
      <Route path={ROUTES.LEADERS} element={<LeadersPage />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.STORAGE} element={<StoragePage />} /> */}

      <Route path="/" element={<Navigate to="/game" replace />} />
      <Route path="*" element={<Navigate to="/game" replace />} />
    </Routes>
  );
};
