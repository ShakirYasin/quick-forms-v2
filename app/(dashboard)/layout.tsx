import { Logo } from "@/components/shared/logo";
import ThemeSwitcher from "@/components/shared/theme-switcher";
import { UserButton } from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

// Define metadata for the dashboard layout
export const metadata: Metadata = {
  title: {
    default: "Dashboard | QuickForms",
    template: "%s | QuickForms",
  },
  description:
    "Create, manage and analyze your forms with QuickForms's intuitive dashboard",
  keywords: [
    "form builder",
    "survey creator",
    "form management",
    "form analytics",
  ],
  authors: [{ name: "Abdul Hadi Waseem" }],
  openGraph: {
    type: "website",
    title: "QuickForms Dashboard",
    description: "Create and manage forms with QuickForms's powerful dashboard",
    siteName: "QuickForms",
  },
  robots: {
    index: false,
    follow: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen max-h-screen min-w-full flex flex-col bg-background">
      <header role="banner">
        <nav
          className="flex items-center justify-between p-4 h-[60px] border border-b"
          role="navigation"
          aria-label="Main navigation"
        >
          <Logo />
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <UserButton />
          </div>
        </nav>
      </header>
      <main className="flex-1" role="main" aria-label="Dashboard content">
        {children}
      </main>
      <footer
        className="border-t border-border py-4 text-center text-sm text-muted-foreground"
        role="contentinfo"
      >
        <p>© {new Date().getFullYear()} QuickForms. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
