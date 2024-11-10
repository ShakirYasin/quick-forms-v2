import { Logo } from "@/components/shared/logo";
import ThemeSwitcher from "@/components/shared/theme-switcher";
import { UserButton } from "@clerk/nextjs";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen max-h-screen min-w-full flex flex-col bg-background">
      <nav className="flex items-center justify-between p-4 h-[60px] border border-b">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <UserButton />
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
