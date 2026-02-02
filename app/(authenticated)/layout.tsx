import React from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative container">
      <Header />
      <div className="flex overflow-hidden">
        <Sidebar />
        <main className="w-full">
          <div className="p-4 sm:p-8 md:p-12 w-full mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
