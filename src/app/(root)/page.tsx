import { ThemeCard } from "@/components/theme/theme-card";

export default function RootPage() {
  return (
    <div className="flex flex-col justify-center gap-3 items-center h-dvh">
      <div className="text-2xl">Nextjs Config</div>
      <ThemeCard />
    </div>
  );
}
