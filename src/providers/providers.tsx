"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppProvider } from "./AppContextProvider";
import ReactQueryProviders from "./reactQueryProviders";
import { SessionProvider } from "next-auth/react"
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <AppProvider>
          <ReactQueryProviders>
            <SessionProvider>
              {children}
            </SessionProvider>
          </ReactQueryProviders>
        </AppProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
