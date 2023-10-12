"use client";
import { usePathname } from "next/navigation";
import TopNav from "@/components/TopNav";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isPrivatePage = pathname !== "/login" && pathname !== "/register";

  return (
    <div>
      <TopNav />
      {children}
    </div>
  );
};
export default LayoutProvider;

// This is basically the TopNav
