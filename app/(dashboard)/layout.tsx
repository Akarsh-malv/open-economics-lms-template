import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { SidebarProvider } from "@/components/providers/sidebar-provider";

export const metadata: Metadata = {
  title: "Courselly",
  description: "Expand your knowledge with expertly crafted courses.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <div className="h-full">{children}</div>
        </SidebarProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}
