import { AppShell } from "@/components/AppShell";
import { profile } from "@/data/profile";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <AppShell profile={profile}>{children}</AppShell>;
};

export default MainLayout;
