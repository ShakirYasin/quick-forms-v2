import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

async function Layout({ children }: LayoutProps) {
  return (
    <main className="flex w-full flex-grow mx-auto h-[calc(100vh-68px)]">
      {children}
    </main>
  );
}

export default Layout;
