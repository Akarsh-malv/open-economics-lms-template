import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
      </div>
    </ThemeProvider>
  );
}
