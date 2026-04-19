import { Sidebar } from "@/components/Sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Profile } from "@/data/profile";

interface AppShellProps {
  children: React.ReactNode;
  profile: Profile;
}

export function AppShell({ children, profile }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Sidebar profile={profile} />

      {/* Desktop theme toggle — top-right, matches reference position */}
      <div className="pointer-events-none fixed top-[2vh] right-[2vw] z-50 hidden lg:block">
        <div className="pointer-events-auto scale-125">
          <ThemeToggle />
        </div>
      </div>

      {/* Fixed copyright — bottom-left, always visible */}
      <p className="fixed bottom-1 left-[3vw] z-40 hidden text-[clamp(0.5rem,0.8vw,1rem)] font-light text-neutral-500 lg:block">
        © {profile.copyrightName}
      </p>

      <main className="relative overflow-x-hidden">{children}</main>
    </div>
  );
}
