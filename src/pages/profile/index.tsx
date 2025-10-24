import { LayoutPage } from "@/pages/layout-page";
import { ProfileHeader } from "./components/profile-header";
import { ReferralProgram } from "./components/referral-program";
import { PaymentMethods } from "./components/payment-methods";
import { SettingsSupport } from "./components/settings-support";
import { ActivitySummary } from "./components/activity-summary";
import { Achievements } from "./components/achievements";
import { BonusRewards } from "./components/bonus-rewards";

export const ProfilePage = () => {
  return (
    <LayoutPage>
      <ProfileHeader />
      <PaymentMethods />
      <ReferralProgram />
      <ActivitySummary />
      <Achievements />
      <BonusRewards />
      <SettingsSupport />
    </LayoutPage>
  );
};

