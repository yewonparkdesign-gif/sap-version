import type { Metadata } from "next";
import "./globals.css";
import { Sidebar, MobileDrawer } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { PageTransition } from "@/components/layout/PageTransition";
import { MobileNavProvider } from "@/components/layout/MobileNavProvider";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "SAP Visual System",
    template: "%s -- SAP Visual System",
  },
  description:
    "The living design system and visual governance platform for SAP.com's visual uplift.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme')||'dark';if(t==='dark')document.documentElement.classList.add('dark');})();` }} />
      </head>
      <body>
        <ThemeProvider>
          <MobileNavProvider>
            <div className="flex h-dvh overflow-y-hidden">
              <Sidebar />
              <MobileDrawer />
              <div className="flex flex-col flex-1 min-w-0">
                <TopBar />
                <main className="flex-1 overflow-y-auto overflow-x-hidden">
                  <PageTransition>{children}</PageTransition>
                </main>
              </div>
            </div>
          </MobileNavProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
