import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import appCss from "../styles.css?url";
import { MainLayout } from "@/components/layout/MainLayout";

import logo from "@/assets/logo/astravidya-logo.jpeg";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "AstraVidya.AI — AI-Powered Digital Marketing Agency",
      },
      {
        name: "description",
        content:
          "AstraVidya.AI builds websites, mobile apps, AI SEO, branding, social media campaigns and lead generation strategies that drive measurable business growth.",
      },
      { name: "theme-color", content: "#7C3AED" },
      { property: "og:site_name", content: "AstraVidya.AI" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logo },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logo },
    ],

    links: [
      { rel: "stylesheet", href: appCss },

      { rel: "icon", type: "image/jpeg", href: logo },
      { rel: "apple-touch-icon", href: logo },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </QueryClientProvider>
  );
}

function NotFound() {
  return (
    <MainLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-7xl font-bold text-brand-gradient">404</h1>

        <p className="mt-4 text-lg text-muted-foreground">
          This page doesn't exist.
        </p>

        <a
          href="/"
          className="mt-6 px-6 py-3 rounded-full bg-brand-gradient text-white font-semibold"
        >
          Go home
        </a>
      </div>
    </MainLayout>
  );
}